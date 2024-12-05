# `containerInstancesContainerInstance` Submodule <a name="`containerInstancesContainerInstance` Submodule" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerInstancesContainerInstance <a name="ContainerInstancesContainerInstance" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance oci_container_instances_container_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstance(scope Construct, id *string, config ContainerInstancesContainerInstanceConfig) ContainerInstancesContainerInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig">ContainerInstancesContainerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig">ContainerInstancesContainerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig">PutDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets">PutImagePullSecrets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics">PutVnics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetContainerRestartPolicy">ResetContainerRestartPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDnsConfig">ResetDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFaultDomain">ResetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetGracefulShutdownTimeoutInSeconds">ResetGracefulShutdownTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetImagePullSecrets">ResetImagePullSecrets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainers` <a name="PutContainers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers"></a>

```go
func PutContainers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDnsConfig` <a name="PutDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig"></a>

```go
func PutDnsConfig(value ContainerInstancesContainerInstanceDnsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---

##### `PutImagePullSecrets` <a name="PutImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets"></a>

```go
func PutImagePullSecrets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig"></a>

```go
func PutShapeConfig(value ContainerInstancesContainerInstanceShapeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts"></a>

```go
func PutTimeouts(value ContainerInstancesContainerInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

---

##### `PutVnics` <a name="PutVnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics"></a>

```go
func PutVnics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolumes` <a name="PutVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContainerRestartPolicy` <a name="ResetContainerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetContainerRestartPolicy"></a>

```go
func ResetContainerRestartPolicy()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDnsConfig` <a name="ResetDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDnsConfig"></a>

```go
func ResetDnsConfig()
```

##### `ResetFaultDomain` <a name="ResetFaultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFaultDomain"></a>

```go
func ResetFaultDomain()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetGracefulShutdownTimeoutInSeconds` <a name="ResetGracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetGracefulShutdownTimeoutInSeconds"></a>

```go
func ResetGracefulShutdownTimeoutInSeconds()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetImagePullSecrets` <a name="ResetImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetImagePullSecrets"></a>

```go
func ResetImagePullSecrets()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVolumes` <a name="ResetVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetVolumes"></a>

```go
func ResetVolumes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.ContainerInstancesContainerInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.ContainerInstancesContainerInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.ContainerInstancesContainerInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.ContainerInstancesContainerInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerInstancesContainerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerInstancesContainerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerInstancesContainerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerCount">ContainerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containers">Containers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList">ContainerInstancesContainerInstanceContainersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfig">DnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference">ContainerInstancesContainerInstanceDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecrets">ImagePullSecrets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList">ContainerInstancesContainerInstanceImagePullSecretsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference">ContainerInstancesContainerInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference">ContainerInstancesContainerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnics">Vnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList">ContainerInstancesContainerInstanceVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumeCount">VolumeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumes">Volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList">ContainerInstancesContainerInstanceVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicyInput">ContainerRestartPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containersInput">ContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfigInput">DnsConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomainInput">FaultDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSecondsInput">GracefulShutdownTimeoutInSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecretsInput">ImagePullSecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnicsInput">VnicsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicy">ContainerRestartPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds">GracefulShutdownTimeoutInSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerCount`<sup>Required</sup> <a name="ContainerCount" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerCount"></a>

```go
func ContainerCount() *f64
```

- *Type:* *f64

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containers"></a>

```go
func Containers() ContainerInstancesContainerInstanceContainersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList">ContainerInstancesContainerInstanceContainersList</a>

---

##### `DnsConfig`<sup>Required</sup> <a name="DnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfig"></a>

```go
func DnsConfig() ContainerInstancesContainerInstanceDnsConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference">ContainerInstancesContainerInstanceDnsConfigOutputReference</a>

---

##### `ImagePullSecrets`<sup>Required</sup> <a name="ImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecrets"></a>

```go
func ImagePullSecrets() ContainerInstancesContainerInstanceImagePullSecretsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList">ContainerInstancesContainerInstanceImagePullSecretsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfig"></a>

```go
func ShapeConfig() ContainerInstancesContainerInstanceShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference">ContainerInstancesContainerInstanceShapeConfigOutputReference</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeouts"></a>

```go
func Timeouts() ContainerInstancesContainerInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference">ContainerInstancesContainerInstanceTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Vnics`<sup>Required</sup> <a name="Vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnics"></a>

```go
func Vnics() ContainerInstancesContainerInstanceVnicsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList">ContainerInstancesContainerInstanceVnicsList</a>

---

##### `VolumeCount`<sup>Required</sup> <a name="VolumeCount" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumeCount"></a>

```go
func VolumeCount() *f64
```

- *Type:* *f64

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumes"></a>

```go
func Volumes() ContainerInstancesContainerInstanceVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList">ContainerInstancesContainerInstanceVolumesList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ContainerRestartPolicyInput`<sup>Optional</sup> <a name="ContainerRestartPolicyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicyInput"></a>

```go
func ContainerRestartPolicyInput() *string
```

- *Type:* *string

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containersInput"></a>

```go
func ContainersInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DnsConfigInput`<sup>Optional</sup> <a name="DnsConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfigInput"></a>

```go
func DnsConfigInput() ContainerInstancesContainerInstanceDnsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---

##### `FaultDomainInput`<sup>Optional</sup> <a name="FaultDomainInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomainInput"></a>

```go
func FaultDomainInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GracefulShutdownTimeoutInSecondsInput`<sup>Optional</sup> <a name="GracefulShutdownTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSecondsInput"></a>

```go
func GracefulShutdownTimeoutInSecondsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImagePullSecretsInput`<sup>Optional</sup> <a name="ImagePullSecretsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecretsInput"></a>

```go
func ImagePullSecretsInput() interface{}
```

- *Type:* interface{}

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfigInput"></a>

```go
func ShapeConfigInput() ContainerInstancesContainerInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VnicsInput`<sup>Optional</sup> <a name="VnicsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnicsInput"></a>

```go
func VnicsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ContainerRestartPolicy`<sup>Required</sup> <a name="ContainerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicy"></a>

```go
func ContainerRestartPolicy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GracefulShutdownTimeoutInSeconds`<sup>Required</sup> <a name="GracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds"></a>

```go
func GracefulShutdownTimeoutInSeconds() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerInstancesContainerInstanceConfig <a name="ContainerInstancesContainerInstanceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityDomain: *string,
	CompartmentId: *string,
	Containers: interface{},
	Shape: *string,
	ShapeConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig,
	Vnics: interface{},
	ContainerRestartPolicy: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	DnsConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig,
	FaultDomain: *string,
	FreeformTags: *map[string]*string,
	GracefulShutdownTimeoutInSeconds: *string,
	Id: *string,
	ImagePullSecrets: interface{},
	State: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts,
	Volumes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containers">Containers</a></code> | <code>interface{}</code> | containers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.vnics">Vnics</a></code> | <code>interface{}</code> | vnics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containerRestartPolicy">ContainerRestartPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dnsConfig">DnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | dns_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.gracefulShutdownTimeoutInSeconds">GracefulShutdownTimeoutInSeconds</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.imagePullSecrets">ImagePullSecrets</a></code> | <code>interface{}</code> | image_pull_secrets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}.

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containers"></a>

```go
Containers interface{}
```

- *Type:* interface{}

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#containers ContainerInstancesContainerInstance#containers}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}.

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shapeConfig"></a>

```go
ShapeConfig ContainerInstancesContainerInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape_config ContainerInstancesContainerInstance#shape_config}

---

##### `Vnics`<sup>Required</sup> <a name="Vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.vnics"></a>

```go
Vnics interface{}
```

- *Type:* interface{}

vnics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vnics ContainerInstancesContainerInstance#vnics}

---

##### `ContainerRestartPolicy`<sup>Optional</sup> <a name="ContainerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containerRestartPolicy"></a>

```go
ContainerRestartPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `DnsConfig`<sup>Optional</sup> <a name="DnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dnsConfig"></a>

```go
DnsConfig ContainerInstancesContainerInstanceDnsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#dns_config ContainerInstancesContainerInstance#dns_config}

---

##### `FaultDomain`<sup>Optional</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.faultDomain"></a>

```go
FaultDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `GracefulShutdownTimeoutInSeconds`<sup>Optional</sup> <a name="GracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.gracefulShutdownTimeoutInSeconds"></a>

```go
GracefulShutdownTimeoutInSeconds *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImagePullSecrets`<sup>Optional</sup> <a name="ImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.imagePullSecrets"></a>

```go
ImagePullSecrets interface{}
```

- *Type:* interface{}

image_pull_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_pull_secrets ContainerInstancesContainerInstance#image_pull_secrets}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.timeouts"></a>

```go
Timeouts ContainerInstancesContainerInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeouts ContainerInstancesContainerInstance#timeouts}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volumes ContainerInstancesContainerInstance#volumes}

---

### ContainerInstancesContainerInstanceContainers <a name="ContainerInstancesContainerInstanceContainers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceContainers {
	ImageUrl: *string,
	Arguments: *[]*string,
	Command: *[]*string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	EnvironmentVariables: *map[string]*string,
	FreeformTags: *map[string]*string,
	HealthChecks: interface{},
	IsResourcePrincipalDisabled: interface{},
	ResourceConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig,
	SecurityContext: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext,
	VolumeMounts: interface{},
	WorkingDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_url ContainerInstancesContainerInstance#image_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.arguments">Arguments</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#arguments ContainerInstancesContainerInstance#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.command">Command</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#environment_variables ContainerInstancesContainerInstance#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.healthChecks">HealthChecks</a></code> | <code>interface{}</code> | health_checks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.isResourcePrincipalDisabled">IsResourcePrincipalDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_resource_principal_disabled ContainerInstancesContainerInstance#is_resource_principal_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.resourceConfig">ResourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | resource_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.securityContext">SecurityContext</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | security_context block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.volumeMounts">VolumeMounts</a></code> | <code>interface{}</code> | volume_mounts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#working_directory ContainerInstancesContainerInstance#working_directory}. |

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.imageUrl"></a>

```go
ImageUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_url ContainerInstancesContainerInstance#image_url}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.arguments"></a>

```go
Arguments *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#arguments ContainerInstancesContainerInstance#arguments}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#environment_variables ContainerInstancesContainerInstance#environment_variables}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `HealthChecks`<sup>Optional</sup> <a name="HealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.healthChecks"></a>

```go
HealthChecks interface{}
```

- *Type:* interface{}

health_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_checks ContainerInstancesContainerInstance#health_checks}

---

##### `IsResourcePrincipalDisabled`<sup>Optional</sup> <a name="IsResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.isResourcePrincipalDisabled"></a>

```go
IsResourcePrincipalDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_resource_principal_disabled ContainerInstancesContainerInstance#is_resource_principal_disabled}.

---

##### `ResourceConfig`<sup>Optional</sup> <a name="ResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.resourceConfig"></a>

```go
ResourceConfig ContainerInstancesContainerInstanceContainersResourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#resource_config ContainerInstancesContainerInstance#resource_config}

---

##### `SecurityContext`<sup>Optional</sup> <a name="SecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.securityContext"></a>

```go
SecurityContext ContainerInstancesContainerInstanceContainersSecurityContext
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

security_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context ContainerInstancesContainerInstance#security_context}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.volumeMounts"></a>

```go
VolumeMounts interface{}
```

- *Type:* interface{}

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_mounts ContainerInstancesContainerInstance#volume_mounts}

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.workingDirectory"></a>

```go
WorkingDirectory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#working_directory ContainerInstancesContainerInstance#working_directory}.

---

### ContainerInstancesContainerInstanceContainersHealthChecks <a name="ContainerInstancesContainerInstanceContainersHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceContainersHealthChecks {
	HealthCheckType: *string,
	Command: *[]*string,
	FailureAction: *string,
	FailureThreshold: *f64,
	Headers: interface{},
	InitialDelayInSeconds: *f64,
	IntervalInSeconds: *f64,
	Name: *string,
	Path: *string,
	Port: *f64,
	Status: *string,
	StatusDetails: *string,
	SuccessThreshold: *f64,
	TimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_check_type ContainerInstancesContainerInstance#health_check_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.command">Command</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureAction">FailureAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_action ContainerInstancesContainerInstance#failure_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_threshold ContainerInstancesContainerInstance#failure_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.initialDelayInSeconds">InitialDelayInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#initial_delay_in_seconds ContainerInstancesContainerInstance#initial_delay_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#interval_in_seconds ContainerInstancesContainerInstance#interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#port ContainerInstancesContainerInstance#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status ContainerInstancesContainerInstance#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.statusDetails">StatusDetails</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status_details ContainerInstancesContainerInstance#status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#success_threshold ContainerInstancesContainerInstance#success_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeout_in_seconds ContainerInstancesContainerInstance#timeout_in_seconds}. |

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.healthCheckType"></a>

```go
HealthCheckType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_check_type ContainerInstancesContainerInstance#health_check_type}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}.

---

##### `FailureAction`<sup>Optional</sup> <a name="FailureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureAction"></a>

```go
FailureAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_action ContainerInstancesContainerInstance#failure_action}.

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_threshold ContainerInstancesContainerInstance#failure_threshold}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#headers ContainerInstancesContainerInstance#headers}

---

##### `InitialDelayInSeconds`<sup>Optional</sup> <a name="InitialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.initialDelayInSeconds"></a>

```go
InitialDelayInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#initial_delay_in_seconds ContainerInstancesContainerInstance#initial_delay_in_seconds}.

---

##### `IntervalInSeconds`<sup>Optional</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.intervalInSeconds"></a>

```go
IntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#interval_in_seconds ContainerInstancesContainerInstance#interval_in_seconds}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#port ContainerInstancesContainerInstance#port}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status ContainerInstancesContainerInstance#status}.

---

##### `StatusDetails`<sup>Optional</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.statusDetails"></a>

```go
StatusDetails *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status_details ContainerInstancesContainerInstance#status_details}.

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.successThreshold"></a>

```go
SuccessThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#success_threshold ContainerInstancesContainerInstance#success_threshold}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeout_in_seconds ContainerInstancesContainerInstance#timeout_in_seconds}.

---

### ContainerInstancesContainerInstanceContainersHealthChecksHeaders <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#value ContainerInstancesContainerInstance#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#value ContainerInstancesContainerInstance#value}.

---

### ContainerInstancesContainerInstanceContainersResourceConfig <a name="ContainerInstancesContainerInstanceContainersResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceContainersResourceConfig {
	MemoryLimitInGbs: *f64,
	VcpusLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.memoryLimitInGbs">MemoryLimitInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.vcpusLimit">VcpusLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}. |

---

##### `MemoryLimitInGbs`<sup>Optional</sup> <a name="MemoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.memoryLimitInGbs"></a>

```go
MemoryLimitInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}.

---

##### `VcpusLimit`<sup>Optional</sup> <a name="VcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.vcpusLimit"></a>

```go
VcpusLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}.

---

### ContainerInstancesContainerInstanceContainersSecurityContext <a name="ContainerInstancesContainerInstanceContainersSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceContainersSecurityContext {
	Capabilities: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities,
	IsNonRootUserCheckEnabled: interface{},
	IsRootFileSystemReadonly: interface{},
	RunAsGroup: *f64,
	RunAsUser: *f64,
	SecurityContextType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.capabilities">Capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | capabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isNonRootUserCheckEnabled">IsNonRootUserCheckEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isRootFileSystemReadonly">IsRootFileSystemReadonly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsGroup">RunAsGroup</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsUser">RunAsUser</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.securityContextType">SecurityContextType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}. |

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.capabilities"></a>

```go
Capabilities ContainerInstancesContainerInstanceContainersSecurityContextCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#capabilities ContainerInstancesContainerInstance#capabilities}

---

##### `IsNonRootUserCheckEnabled`<sup>Optional</sup> <a name="IsNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isNonRootUserCheckEnabled"></a>

```go
IsNonRootUserCheckEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}.

---

##### `IsRootFileSystemReadonly`<sup>Optional</sup> <a name="IsRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isRootFileSystemReadonly"></a>

```go
IsRootFileSystemReadonly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}.

---

##### `RunAsGroup`<sup>Optional</sup> <a name="RunAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsGroup"></a>

```go
RunAsGroup *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}.

---

##### `RunAsUser`<sup>Optional</sup> <a name="RunAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsUser"></a>

```go
RunAsUser *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}.

---

##### `SecurityContextType`<sup>Optional</sup> <a name="SecurityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.securityContextType"></a>

```go
SecurityContextType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}.

---

### ContainerInstancesContainerInstanceContainersSecurityContextCapabilities <a name="ContainerInstancesContainerInstanceContainersSecurityContextCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities {
	AddCapabilities: *[]*string,
	DropCapabilities: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.addCapabilities">AddCapabilities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.dropCapabilities">DropCapabilities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}. |

---

##### `AddCapabilities`<sup>Optional</sup> <a name="AddCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.addCapabilities"></a>

```go
AddCapabilities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}.

---

##### `DropCapabilities`<sup>Optional</sup> <a name="DropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.dropCapabilities"></a>

```go
DropCapabilities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}.

---

### ContainerInstancesContainerInstanceContainersVolumeMounts <a name="ContainerInstancesContainerInstanceContainersVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceContainersVolumeMounts {
	MountPath: *string,
	VolumeName: *string,
	IsReadOnly: interface{},
	Partition: *f64,
	SubPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.mountPath">MountPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#mount_path ContainerInstancesContainerInstance#mount_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.volumeName">VolumeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_name ContainerInstancesContainerInstance#volume_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.isReadOnly">IsReadOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_read_only ContainerInstancesContainerInstance#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.partition">Partition</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#partition ContainerInstancesContainerInstance#partition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.subPath">SubPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#sub_path ContainerInstancesContainerInstance#sub_path}. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#mount_path ContainerInstancesContainerInstance#mount_path}.

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.volumeName"></a>

```go
VolumeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_name ContainerInstancesContainerInstance#volume_name}.

---

##### `IsReadOnly`<sup>Optional</sup> <a name="IsReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.isReadOnly"></a>

```go
IsReadOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_read_only ContainerInstancesContainerInstance#is_read_only}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.partition"></a>

```go
Partition *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#partition ContainerInstancesContainerInstance#partition}.

---

##### `SubPath`<sup>Optional</sup> <a name="SubPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.subPath"></a>

```go
SubPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#sub_path ContainerInstancesContainerInstance#sub_path}.

---

### ContainerInstancesContainerInstanceDnsConfig <a name="ContainerInstancesContainerInstanceDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceDnsConfig {
	Nameservers: *[]*string,
	Options: *[]*string,
	Searches: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.nameservers">Nameservers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.options">Options</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.searches">Searches</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}. |

---

##### `Nameservers`<sup>Optional</sup> <a name="Nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.nameservers"></a>

```go
Nameservers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.options"></a>

```go
Options *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}.

---

##### `Searches`<sup>Optional</sup> <a name="Searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.searches"></a>

```go
Searches *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}.

---

### ContainerInstancesContainerInstanceImagePullSecrets <a name="ContainerInstancesContainerInstanceImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceImagePullSecrets {
	RegistryEndpoint: *string,
	SecretType: *string,
	Password: *string,
	SecretId: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.registryEndpoint">RegistryEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#registry_endpoint ContainerInstancesContainerInstance#registry_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretType">SecretType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_type ContainerInstancesContainerInstance#secret_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#password ContainerInstancesContainerInstance#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_id ContainerInstancesContainerInstance#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#username ContainerInstancesContainerInstance#username}. |

---

##### `RegistryEndpoint`<sup>Required</sup> <a name="RegistryEndpoint" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.registryEndpoint"></a>

```go
RegistryEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#registry_endpoint ContainerInstancesContainerInstance#registry_endpoint}.

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretType"></a>

```go
SecretType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_type ContainerInstancesContainerInstance#secret_type}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#password ContainerInstancesContainerInstance#password}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_id ContainerInstancesContainerInstance#secret_id}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#username ContainerInstancesContainerInstance#username}.

---

### ContainerInstancesContainerInstanceShapeConfig <a name="ContainerInstancesContainerInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceShapeConfig {
	Ocpus: *f64,
	MemoryInGbs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.ocpus">Ocpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}. |

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.ocpus"></a>

```go
Ocpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}.

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.memoryInGbs"></a>

```go
MemoryInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}.

---

### ContainerInstancesContainerInstanceTimeouts <a name="ContainerInstancesContainerInstanceTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}.

---

### ContainerInstancesContainerInstanceVnics <a name="ContainerInstancesContainerInstanceVnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceVnics {
	SubnetId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	HostnameLabel: *string,
	IsPublicIpAssigned: interface{},
	NsgIds: *[]*string,
	PrivateIp: *string,
	SkipSourceDestCheck: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#subnet_id ContainerInstancesContainerInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#hostname_label ContainerInstancesContainerInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.isPublicIpAssigned">IsPublicIpAssigned</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_public_ip_assigned ContainerInstancesContainerInstance#is_public_ip_assigned}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nsg_ids ContainerInstancesContainerInstance#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#private_ip ContainerInstancesContainerInstance#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#skip_source_dest_check ContainerInstancesContainerInstance#skip_source_dest_check}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#subnet_id ContainerInstancesContainerInstance#subnet_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `HostnameLabel`<sup>Optional</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.hostnameLabel"></a>

```go
HostnameLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#hostname_label ContainerInstancesContainerInstance#hostname_label}.

---

##### `IsPublicIpAssigned`<sup>Optional</sup> <a name="IsPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.isPublicIpAssigned"></a>

```go
IsPublicIpAssigned interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_public_ip_assigned ContainerInstancesContainerInstance#is_public_ip_assigned}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nsg_ids ContainerInstancesContainerInstance#nsg_ids}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#private_ip ContainerInstancesContainerInstance#private_ip}.

---

##### `SkipSourceDestCheck`<sup>Optional</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.skipSourceDestCheck"></a>

```go
SkipSourceDestCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#skip_source_dest_check ContainerInstancesContainerInstance#skip_source_dest_check}.

---

### ContainerInstancesContainerInstanceVolumes <a name="ContainerInstancesContainerInstanceVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceVolumes {
	Name: *string,
	VolumeType: *string,
	BackingStore: *string,
	Configs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_type ContainerInstancesContainerInstance#volume_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.backingStore">BackingStore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#backing_store ContainerInstancesContainerInstance#backing_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.configs">Configs</a></code> | <code>interface{}</code> | configs block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_type ContainerInstancesContainerInstance#volume_type}.

---

##### `BackingStore`<sup>Optional</sup> <a name="BackingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.backingStore"></a>

```go
BackingStore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#backing_store ContainerInstancesContainerInstance#backing_store}.

---

##### `Configs`<sup>Optional</sup> <a name="Configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.configs"></a>

```go
Configs interface{}
```

- *Type:* interface{}

configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#configs ContainerInstancesContainerInstance#configs}

---

### ContainerInstancesContainerInstanceVolumesConfigs <a name="ContainerInstancesContainerInstanceVolumesConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

&containerinstancescontainerinstance.ContainerInstancesContainerInstanceVolumesConfigs {
	Data: *string,
	FileName: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.data">Data</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#data ContainerInstancesContainerInstance#data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.fileName">FileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#file_name ContainerInstancesContainerInstance#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}. |

---

##### `Data`<sup>Optional</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.data"></a>

```go
Data *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#data ContainerInstancesContainerInstance#data}.

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.fileName"></a>

```go
FileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#file_name ContainerInstancesContainerInstance#file_name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerInstancesContainerInstanceContainersHealthChecksHeadersList <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeadersList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceContainersHealthChecksHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerInstancesContainerInstanceContainersHealthChecksHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get"></a>

```go
func Get(index *f64) ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceContainersHealthChecksList <a name="ContainerInstancesContainerInstanceContainersHealthChecksList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceContainersHealthChecksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerInstancesContainerInstanceContainersHealthChecksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get"></a>

```go
func Get(index *f64) ContainerInstancesContainerInstanceContainersHealthChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceContainersHealthChecksOutputReference <a name="ContainerInstancesContainerInstanceContainersHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceContainersHealthChecksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerInstancesContainerInstanceContainersHealthChecksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureAction">ResetFailureAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetInitialDelayInSeconds">ResetInitialDelayInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetIntervalInSeconds">ResetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatusDetails">ResetStatusDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCommand` <a name="ResetCommand" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetFailureAction` <a name="ResetFailureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureAction"></a>

```go
func ResetFailureAction()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetHeaders` <a name="ResetHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetInitialDelayInSeconds` <a name="ResetInitialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetInitialDelayInSeconds"></a>

```go
func ResetInitialDelayInSeconds()
```

##### `ResetIntervalInSeconds` <a name="ResetIntervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetIntervalInSeconds"></a>

```go
func ResetIntervalInSeconds()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetStatusDetails` <a name="ResetStatusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatusDetails"></a>

```go
func ResetStatusDetails()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetSuccessThreshold"></a>

```go
func ResetSuccessThreshold()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers">Headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList">ContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureActionInput">FailureActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSecondsInput">InitialDelayInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSecondsInput">IntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetailsInput">StatusDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction">FailureAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds">InitialDelayInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails">StatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers"></a>

```go
func Headers() ContainerInstancesContainerInstanceContainersHealthChecksHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList">ContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a>

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `FailureActionInput`<sup>Optional</sup> <a name="FailureActionInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureActionInput"></a>

```go
func FailureActionInput() *string
```

- *Type:* *string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckTypeInput"></a>

```go
func HealthCheckTypeInput() *string
```

- *Type:* *string

---

##### `InitialDelayInSecondsInput`<sup>Optional</sup> <a name="InitialDelayInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSecondsInput"></a>

```go
func InitialDelayInSecondsInput() *f64
```

- *Type:* *f64

---

##### `IntervalInSecondsInput`<sup>Optional</sup> <a name="IntervalInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSecondsInput"></a>

```go
func IntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `StatusDetailsInput`<sup>Optional</sup> <a name="StatusDetailsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetailsInput"></a>

```go
func StatusDetailsInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThresholdInput"></a>

```go
func SuccessThresholdInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `FailureAction`<sup>Required</sup> <a name="FailureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction"></a>

```go
func FailureAction() *string
```

- *Type:* *string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType"></a>

```go
func HealthCheckType() *string
```

- *Type:* *string

---

##### `InitialDelayInSeconds`<sup>Required</sup> <a name="InitialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds"></a>

```go
func InitialDelayInSeconds() *f64
```

- *Type:* *f64

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds"></a>

```go
func IntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails"></a>

```go
func StatusDetails() *string
```

- *Type:* *string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold"></a>

```go
func SuccessThreshold() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceContainersList <a name="ContainerInstancesContainerInstanceContainersList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerInstancesContainerInstanceContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get"></a>

```go
func Get(index *f64) ContainerInstancesContainerInstanceContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceContainersOutputReference <a name="ContainerInstancesContainerInstanceContainersOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerInstancesContainerInstanceContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks">PutHealthChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig">PutResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext">PutSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetHealthChecks">ResetHealthChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetIsResourcePrincipalDisabled">ResetIsResourcePrincipalDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetResourceConfig">ResetResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetSecurityContext">ResetSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthChecks` <a name="PutHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks"></a>

```go
func PutHealthChecks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceConfig` <a name="PutResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig"></a>

```go
func PutResourceConfig(value ContainerInstancesContainerInstanceContainersResourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---

##### `PutSecurityContext` <a name="PutSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext"></a>

```go
func PutSecurityContext(value ContainerInstancesContainerInstanceContainersSecurityContext)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts"></a>

```go
func PutVolumeMounts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArguments` <a name="ResetArguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetCommand` <a name="ResetCommand" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetHealthChecks` <a name="ResetHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetHealthChecks"></a>

```go
func ResetHealthChecks()
```

##### `ResetIsResourcePrincipalDisabled` <a name="ResetIsResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetIsResourcePrincipalDisabled"></a>

```go
func ResetIsResourcePrincipalDisabled()
```

##### `ResetResourceConfig` <a name="ResetResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetResourceConfig"></a>

```go
func ResetResourceConfig()
```

##### `ResetSecurityContext` <a name="ResetSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetSecurityContext"></a>

```go
func ResetSecurityContext()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetVolumeMounts"></a>

```go
func ResetVolumeMounts()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetWorkingDirectory"></a>

```go
func ResetWorkingDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerId">ContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId">ContainerInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.exitCode">ExitCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks">HealthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList">ContainerInstancesContainerInstanceContainersHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig">ResourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference">ContainerInstancesContainerInstanceContainersResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContext">SecurityContext</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated">TimeTerminated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList">ContainerInstancesContainerInstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecksInput">HealthChecksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrlInput">ImageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabledInput">IsResourcePrincipalDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfigInput">ResourceConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContextInput">SecurityContextInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.arguments">Arguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled">IsResourcePrincipalDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerId"></a>

```go
func ContainerId() *string
```

- *Type:* *string

---

##### `ContainerInstanceId`<sup>Required</sup> <a name="ContainerInstanceId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId"></a>

```go
func ContainerInstanceId() *string
```

- *Type:* *string

---

##### `ExitCode`<sup>Required</sup> <a name="ExitCode" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.exitCode"></a>

```go
func ExitCode() *f64
```

- *Type:* *f64

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks"></a>

```go
func HealthChecks() ContainerInstancesContainerInstanceContainersHealthChecksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList">ContainerInstancesContainerInstanceContainersHealthChecksList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ResourceConfig`<sup>Required</sup> <a name="ResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig"></a>

```go
func ResourceConfig() ContainerInstancesContainerInstanceContainersResourceConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference">ContainerInstancesContainerInstanceContainersResourceConfigOutputReference</a>

---

##### `SecurityContext`<sup>Required</sup> <a name="SecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContext"></a>

```go
func SecurityContext() ContainerInstancesContainerInstanceContainersSecurityContextOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeTerminated`<sup>Required</sup> <a name="TimeTerminated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated"></a>

```go
func TimeTerminated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts"></a>

```go
func VolumeMounts() ContainerInstancesContainerInstanceContainersVolumeMountsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList">ContainerInstancesContainerInstanceContainersVolumeMountsList</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.argumentsInput"></a>

```go
func ArgumentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HealthChecksInput`<sup>Optional</sup> <a name="HealthChecksInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecksInput"></a>

```go
func HealthChecksInput() interface{}
```

- *Type:* interface{}

---

##### `ImageUrlInput`<sup>Optional</sup> <a name="ImageUrlInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrlInput"></a>

```go
func ImageUrlInput() *string
```

- *Type:* *string

---

##### `IsResourcePrincipalDisabledInput`<sup>Optional</sup> <a name="IsResourcePrincipalDisabledInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabledInput"></a>

```go
func IsResourcePrincipalDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceConfigInput`<sup>Optional</sup> <a name="ResourceConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfigInput"></a>

```go
func ResourceConfigInput() ContainerInstancesContainerInstanceContainersResourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---

##### `SecurityContextInput`<sup>Optional</sup> <a name="SecurityContextInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContextInput"></a>

```go
func SecurityContextInput() ContainerInstancesContainerInstanceContainersSecurityContext
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMountsInput"></a>

```go
func VolumeMountsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectoryInput"></a>

```go
func WorkingDirectoryInput() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.arguments"></a>

```go
func Arguments() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl"></a>

```go
func ImageUrl() *string
```

- *Type:* *string

---

##### `IsResourcePrincipalDisabled`<sup>Required</sup> <a name="IsResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled"></a>

```go
func IsResourcePrincipalDisabled() interface{}
```

- *Type:* interface{}

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory"></a>

```go
func WorkingDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceContainersResourceConfigOutputReference <a name="ContainerInstancesContainerInstanceContainersResourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceContainersResourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerInstancesContainerInstanceContainersResourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetMemoryLimitInGbs">ResetMemoryLimitInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetVcpusLimit">ResetVcpusLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryLimitInGbs` <a name="ResetMemoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetMemoryLimitInGbs"></a>

```go
func ResetMemoryLimitInGbs()
```

##### `ResetVcpusLimit` <a name="ResetVcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetVcpusLimit"></a>

```go
func ResetVcpusLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbsInput">MemoryLimitInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimitInput">VcpusLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs">MemoryLimitInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit">VcpusLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryLimitInGbsInput`<sup>Optional</sup> <a name="MemoryLimitInGbsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbsInput"></a>

```go
func MemoryLimitInGbsInput() *f64
```

- *Type:* *f64

---

##### `VcpusLimitInput`<sup>Optional</sup> <a name="VcpusLimitInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimitInput"></a>

```go
func VcpusLimitInput() *f64
```

- *Type:* *f64

---

##### `MemoryLimitInGbs`<sup>Required</sup> <a name="MemoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs"></a>

```go
func MemoryLimitInGbs() *f64
```

- *Type:* *f64

---

##### `VcpusLimit`<sup>Required</sup> <a name="VcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit"></a>

```go
func VcpusLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerInstancesContainerInstanceContainersResourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---


### ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference <a name="ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetAddCapabilities">ResetAddCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetDropCapabilities">ResetDropCapabilities</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddCapabilities` <a name="ResetAddCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetAddCapabilities"></a>

```go
func ResetAddCapabilities()
```

##### `ResetDropCapabilities` <a name="ResetDropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetDropCapabilities"></a>

```go
func ResetDropCapabilities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilitiesInput">AddCapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilitiesInput">DropCapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities">AddCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities">DropCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddCapabilitiesInput`<sup>Optional</sup> <a name="AddCapabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilitiesInput"></a>

```go
func AddCapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DropCapabilitiesInput`<sup>Optional</sup> <a name="DropCapabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilitiesInput"></a>

```go
func DropCapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AddCapabilities`<sup>Required</sup> <a name="AddCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities"></a>

```go
func AddCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `DropCapabilities`<sup>Required</sup> <a name="DropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities"></a>

```go
func DropCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerInstancesContainerInstanceContainersSecurityContextCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---


### ContainerInstancesContainerInstanceContainersSecurityContextOutputReference <a name="ContainerInstancesContainerInstanceContainersSecurityContextOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceContainersSecurityContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerInstancesContainerInstanceContainersSecurityContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities">PutCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsNonRootUserCheckEnabled">ResetIsNonRootUserCheckEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsRootFileSystemReadonly">ResetIsRootFileSystemReadonly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsGroup">ResetRunAsGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsUser">ResetRunAsUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetSecurityContextType">ResetSecurityContextType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapabilities` <a name="PutCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities"></a>

```go
func PutCapabilities(value ContainerInstancesContainerInstanceContainersSecurityContextCapabilities)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetCapabilities"></a>

```go
func ResetCapabilities()
```

##### `ResetIsNonRootUserCheckEnabled` <a name="ResetIsNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsNonRootUserCheckEnabled"></a>

```go
func ResetIsNonRootUserCheckEnabled()
```

##### `ResetIsRootFileSystemReadonly` <a name="ResetIsRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsRootFileSystemReadonly"></a>

```go
func ResetIsRootFileSystemReadonly()
```

##### `ResetRunAsGroup` <a name="ResetRunAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsGroup"></a>

```go
func ResetRunAsGroup()
```

##### `ResetRunAsUser` <a name="ResetRunAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsUser"></a>

```go
func ResetRunAsUser()
```

##### `ResetSecurityContextType` <a name="ResetSecurityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetSecurityContextType"></a>

```go
func ResetSecurityContextType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities">Capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilitiesInput">CapabilitiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabledInput">IsNonRootUserCheckEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonlyInput">IsRootFileSystemReadonlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroupInput">RunAsGroupInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUserInput">RunAsUserInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextTypeInput">SecurityContextTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled">IsNonRootUserCheckEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly">IsRootFileSystemReadonly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup">RunAsGroup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser">RunAsUser</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType">SecurityContextType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities"></a>

```go
func Capabilities() ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() ContainerInstancesContainerInstanceContainersSecurityContextCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---

##### `IsNonRootUserCheckEnabledInput`<sup>Optional</sup> <a name="IsNonRootUserCheckEnabledInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabledInput"></a>

```go
func IsNonRootUserCheckEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsRootFileSystemReadonlyInput`<sup>Optional</sup> <a name="IsRootFileSystemReadonlyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonlyInput"></a>

```go
func IsRootFileSystemReadonlyInput() interface{}
```

- *Type:* interface{}

---

##### `RunAsGroupInput`<sup>Optional</sup> <a name="RunAsGroupInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroupInput"></a>

```go
func RunAsGroupInput() *f64
```

- *Type:* *f64

---

##### `RunAsUserInput`<sup>Optional</sup> <a name="RunAsUserInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUserInput"></a>

```go
func RunAsUserInput() *f64
```

- *Type:* *f64

---

##### `SecurityContextTypeInput`<sup>Optional</sup> <a name="SecurityContextTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextTypeInput"></a>

```go
func SecurityContextTypeInput() *string
```

- *Type:* *string

---

##### `IsNonRootUserCheckEnabled`<sup>Required</sup> <a name="IsNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled"></a>

```go
func IsNonRootUserCheckEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsRootFileSystemReadonly`<sup>Required</sup> <a name="IsRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly"></a>

```go
func IsRootFileSystemReadonly() interface{}
```

- *Type:* interface{}

---

##### `RunAsGroup`<sup>Required</sup> <a name="RunAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup"></a>

```go
func RunAsGroup() *f64
```

- *Type:* *f64

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser"></a>

```go
func RunAsUser() *f64
```

- *Type:* *f64

---

##### `SecurityContextType`<sup>Required</sup> <a name="SecurityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType"></a>

```go
func SecurityContextType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerInstancesContainerInstanceContainersSecurityContext
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---


### ContainerInstancesContainerInstanceContainersVolumeMountsList <a name="ContainerInstancesContainerInstanceContainersVolumeMountsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceContainersVolumeMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerInstancesContainerInstanceContainersVolumeMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get"></a>

```go
func Get(index *f64) ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference <a name="ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceContainersVolumeMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetIsReadOnly">ResetIsReadOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetSubPath">ResetSubPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsReadOnly` <a name="ResetIsReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetIsReadOnly"></a>

```go
func ResetIsReadOnly()
```

##### `ResetPartition` <a name="ResetPartition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetSubPath` <a name="ResetSubPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetSubPath"></a>

```go
func ResetSubPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnlyInput">IsReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partitionInput">PartitionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPathInput">SubPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeNameInput">VolumeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly">IsReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition">Partition</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath">SubPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName">VolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsReadOnlyInput`<sup>Optional</sup> <a name="IsReadOnlyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnlyInput"></a>

```go
func IsReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partitionInput"></a>

```go
func PartitionInput() *f64
```

- *Type:* *f64

---

##### `SubPathInput`<sup>Optional</sup> <a name="SubPathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPathInput"></a>

```go
func SubPathInput() *string
```

- *Type:* *string

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeNameInput"></a>

```go
func VolumeNameInput() *string
```

- *Type:* *string

---

##### `IsReadOnly`<sup>Required</sup> <a name="IsReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly"></a>

```go
func IsReadOnly() interface{}
```

- *Type:* interface{}

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition"></a>

```go
func Partition() *f64
```

- *Type:* *f64

---

##### `SubPath`<sup>Required</sup> <a name="SubPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```go
func SubPath() *string
```

- *Type:* *string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName"></a>

```go
func VolumeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceDnsConfigOutputReference <a name="ContainerInstancesContainerInstanceDnsConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceDnsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerInstancesContainerInstanceDnsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetNameservers">ResetNameservers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetSearches">ResetSearches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNameservers` <a name="ResetNameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetNameservers"></a>

```go
func ResetNameservers()
```

##### `ResetOptions` <a name="ResetOptions" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetSearches` <a name="ResetSearches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetSearches"></a>

```go
func ResetSearches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameserversInput">NameserversInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.optionsInput">OptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searchesInput">SearchesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers">Nameservers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.options">Options</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches">Searches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameserversInput`<sup>Optional</sup> <a name="NameserversInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameserversInput"></a>

```go
func NameserversInput() *[]*string
```

- *Type:* *[]*string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.optionsInput"></a>

```go
func OptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SearchesInput`<sup>Optional</sup> <a name="SearchesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searchesInput"></a>

```go
func SearchesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers"></a>

```go
func Nameservers() *[]*string
```

- *Type:* *[]*string

---

##### `Options`<sup>Required</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.options"></a>

```go
func Options() *[]*string
```

- *Type:* *[]*string

---

##### `Searches`<sup>Required</sup> <a name="Searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches"></a>

```go
func Searches() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerInstancesContainerInstanceDnsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---


### ContainerInstancesContainerInstanceImagePullSecretsList <a name="ContainerInstancesContainerInstanceImagePullSecretsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceImagePullSecretsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerInstancesContainerInstanceImagePullSecretsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get"></a>

```go
func Get(index *f64) ContainerInstancesContainerInstanceImagePullSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceImagePullSecretsOutputReference <a name="ContainerInstancesContainerInstanceImagePullSecretsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceImagePullSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerInstancesContainerInstanceImagePullSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetSecretId` <a name="ResetSecretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetSecretId"></a>

```go
func ResetSecretId()
```

##### `ResetUsername` <a name="ResetUsername" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpointInput">RegistryEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretTypeInput">SecretTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint">RegistryEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RegistryEndpointInput`<sup>Optional</sup> <a name="RegistryEndpointInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpointInput"></a>

```go
func RegistryEndpointInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretTypeInput"></a>

```go
func SecretTypeInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `RegistryEndpoint`<sup>Required</sup> <a name="RegistryEndpoint" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint"></a>

```go
func RegistryEndpoint() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceShapeConfigOutputReference <a name="ContainerInstancesContainerInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerInstancesContainerInstanceShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```go
func ResetMemoryInGbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">NetworkingBandwidthInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkingBandwidthInGbps`<sup>Required</sup> <a name="NetworkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```go
func NetworkingBandwidthInGbps() *f64
```

- *Type:* *f64

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription"></a>

```go
func ProcessorDescription() *string
```

- *Type:* *string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```go
func MemoryInGbsInput() *f64
```

- *Type:* *f64

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```go
func OcpusInput() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerInstancesContainerInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---


### ContainerInstancesContainerInstanceTimeoutsOutputReference <a name="ContainerInstancesContainerInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerInstancesContainerInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceVnicsList <a name="ContainerInstancesContainerInstanceVnicsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceVnicsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerInstancesContainerInstanceVnicsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get"></a>

```go
func Get(index *f64) ContainerInstancesContainerInstanceVnicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceVnicsOutputReference <a name="ContainerInstancesContainerInstanceVnicsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceVnicsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerInstancesContainerInstanceVnicsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetHostnameLabel">ResetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetIsPublicIpAssigned">ResetIsPublicIpAssigned</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetSkipSourceDestCheck">ResetSkipSourceDestCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetHostnameLabel` <a name="ResetHostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetHostnameLabel"></a>

```go
func ResetHostnameLabel()
```

##### `ResetIsPublicIpAssigned` <a name="ResetIsPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetIsPublicIpAssigned"></a>

```go
func ResetIsPublicIpAssigned()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetSkipSourceDestCheck` <a name="ResetSkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetSkipSourceDestCheck"></a>

```go
func ResetSkipSourceDestCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabelInput">HostnameLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssignedInput">IsPublicIpAssignedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheckInput">SkipSourceDestCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned">IsPublicIpAssigned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostnameLabelInput`<sup>Optional</sup> <a name="HostnameLabelInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabelInput"></a>

```go
func HostnameLabelInput() *string
```

- *Type:* *string

---

##### `IsPublicIpAssignedInput`<sup>Optional</sup> <a name="IsPublicIpAssignedInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssignedInput"></a>

```go
func IsPublicIpAssignedInput() interface{}
```

- *Type:* interface{}

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `SkipSourceDestCheckInput`<sup>Optional</sup> <a name="SkipSourceDestCheckInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheckInput"></a>

```go
func SkipSourceDestCheckInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel"></a>

```go
func HostnameLabel() *string
```

- *Type:* *string

---

##### `IsPublicIpAssigned`<sup>Required</sup> <a name="IsPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned"></a>

```go
func IsPublicIpAssigned() interface{}
```

- *Type:* interface{}

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `SkipSourceDestCheck`<sup>Required</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck"></a>

```go
func SkipSourceDestCheck() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceVolumesConfigsList <a name="ContainerInstancesContainerInstanceVolumesConfigsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceVolumesConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerInstancesContainerInstanceVolumesConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get"></a>

```go
func Get(index *f64) ContainerInstancesContainerInstanceVolumesConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceVolumesConfigsOutputReference <a name="ContainerInstancesContainerInstanceVolumesConfigsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceVolumesConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerInstancesContainerInstanceVolumesConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetFileName` <a name="ResetFileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetFileName"></a>

```go
func ResetFileName()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileNameInput"></a>

```go
func FileNameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceVolumesList <a name="ContainerInstancesContainerInstanceVolumesList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerInstancesContainerInstanceVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get"></a>

```go
func Get(index *f64) ContainerInstancesContainerInstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerInstancesContainerInstanceVolumesOutputReference <a name="ContainerInstancesContainerInstanceVolumesOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerinstancescontainerinstance"

containerinstancescontainerinstance.NewContainerInstancesContainerInstanceVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerInstancesContainerInstanceVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs">PutConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetBackingStore">ResetBackingStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetConfigs">ResetConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigs` <a name="PutConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs"></a>

```go
func PutConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBackingStore` <a name="ResetBackingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetBackingStore"></a>

```go
func ResetBackingStore()
```

##### `ResetConfigs` <a name="ResetConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetConfigs"></a>

```go
func ResetConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configs">Configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList">ContainerInstancesContainerInstanceVolumesConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStoreInput">BackingStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configsInput">ConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore">BackingStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configs`<sup>Required</sup> <a name="Configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configs"></a>

```go
func Configs() ContainerInstancesContainerInstanceVolumesConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList">ContainerInstancesContainerInstanceVolumesConfigsList</a>

---

##### `BackingStoreInput`<sup>Optional</sup> <a name="BackingStoreInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStoreInput"></a>

```go
func BackingStoreInput() *string
```

- *Type:* *string

---

##### `ConfigsInput`<sup>Optional</sup> <a name="ConfigsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configsInput"></a>

```go
func ConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `BackingStore`<sup>Required</sup> <a name="BackingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore"></a>

```go
func BackingStore() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



