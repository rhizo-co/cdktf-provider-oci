# `loadBalancerLoadBalancer` Submodule <a name="`loadBalancerLoadBalancer` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerLoadBalancer <a name="LoadBalancerLoadBalancer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer oci_load_balancer_load_balancer}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.NewLoadBalancerLoadBalancer(scope Construct, id *string, config LoadBalancerLoadBalancerConfig) LoadBalancerLoadBalancer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig">LoadBalancerLoadBalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig">LoadBalancerLoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putReservedIps">PutReservedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putShapeDetails">PutShapeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIpMode">ResetIpMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsDeleteProtectionEnabled">ResetIsDeleteProtectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsPrivate">ResetIsPrivate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsRequestIdEnabled">ResetIsRequestIdEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetNetworkSecurityGroupIds">ResetNetworkSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetRequestIdHeader">ResetRequestIdHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetReservedIps">ResetReservedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetShapeDetails">ResetShapeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReservedIps` <a name="PutReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putReservedIps"></a>

```go
func PutReservedIps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putReservedIps.parameter.value"></a>

- *Type:* interface{}

---

##### `PutShapeDetails` <a name="PutShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putShapeDetails"></a>

```go
func PutShapeDetails(value LoadBalancerLoadBalancerShapeDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putShapeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putTimeouts"></a>

```go
func PutTimeouts(value LoadBalancerLoadBalancerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetId"></a>

```go
func ResetId()
```

##### `ResetIpMode` <a name="ResetIpMode" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIpMode"></a>

```go
func ResetIpMode()
```

##### `ResetIsDeleteProtectionEnabled` <a name="ResetIsDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsDeleteProtectionEnabled"></a>

```go
func ResetIsDeleteProtectionEnabled()
```

##### `ResetIsPrivate` <a name="ResetIsPrivate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsPrivate"></a>

```go
func ResetIsPrivate()
```

##### `ResetIsRequestIdEnabled` <a name="ResetIsRequestIdEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsRequestIdEnabled"></a>

```go
func ResetIsRequestIdEnabled()
```

##### `ResetNetworkSecurityGroupIds` <a name="ResetNetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetNetworkSecurityGroupIds"></a>

```go
func ResetNetworkSecurityGroupIds()
```

##### `ResetRequestIdHeader` <a name="ResetRequestIdHeader" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetRequestIdHeader"></a>

```go
func ResetRequestIdHeader()
```

##### `ResetReservedIps` <a name="ResetReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetReservedIps"></a>

```go
func ResetReservedIps()
```

##### `ResetShapeDetails` <a name="ResetShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetShapeDetails"></a>

```go
func ResetShapeDetails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerLoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.LoadBalancerLoadBalancer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.LoadBalancerLoadBalancer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.LoadBalancerLoadBalancer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.LoadBalancerLoadBalancer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LoadBalancerLoadBalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LoadBalancerLoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LoadBalancerLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddressDetails">IpAddressDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList">LoadBalancerLoadBalancerIpAddressDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIps">ReservedIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList">LoadBalancerLoadBalancerReservedIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetails">ShapeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference">LoadBalancerLoadBalancerShapeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference">LoadBalancerLoadBalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipModeInput">IpModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabledInput">IsDeleteProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivateInput">IsPrivateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabledInput">IsRequestIdEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIdsInput">NetworkSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeaderInput">RequestIdHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIpsInput">ReservedIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetailsInput">ShapeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipMode">IpMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabled">IsDeleteProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivate">IsPrivate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabled">IsRequestIdEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIds">NetworkSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeader">RequestIdHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpAddressDetails`<sup>Required</sup> <a name="IpAddressDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddressDetails"></a>

```go
func IpAddressDetails() LoadBalancerLoadBalancerIpAddressDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList">LoadBalancerLoadBalancerIpAddressDetailsList</a>

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ReservedIps`<sup>Required</sup> <a name="ReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIps"></a>

```go
func ReservedIps() LoadBalancerLoadBalancerReservedIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList">LoadBalancerLoadBalancerReservedIpsList</a>

---

##### `ShapeDetails`<sup>Required</sup> <a name="ShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetails"></a>

```go
func ShapeDetails() LoadBalancerLoadBalancerShapeDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference">LoadBalancerLoadBalancerShapeDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeouts"></a>

```go
func Timeouts() LoadBalancerLoadBalancerTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference">LoadBalancerLoadBalancerTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpModeInput`<sup>Optional</sup> <a name="IpModeInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipModeInput"></a>

```go
func IpModeInput() *string
```

- *Type:* *string

---

##### `IsDeleteProtectionEnabledInput`<sup>Optional</sup> <a name="IsDeleteProtectionEnabledInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabledInput"></a>

```go
func IsDeleteProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsPrivateInput`<sup>Optional</sup> <a name="IsPrivateInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivateInput"></a>

```go
func IsPrivateInput() interface{}
```

- *Type:* interface{}

---

##### `IsRequestIdEnabledInput`<sup>Optional</sup> <a name="IsRequestIdEnabledInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabledInput"></a>

```go
func IsRequestIdEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkSecurityGroupIdsInput`<sup>Optional</sup> <a name="NetworkSecurityGroupIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIdsInput"></a>

```go
func NetworkSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequestIdHeaderInput`<sup>Optional</sup> <a name="RequestIdHeaderInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeaderInput"></a>

```go
func RequestIdHeaderInput() *string
```

- *Type:* *string

---

##### `ReservedIpsInput`<sup>Optional</sup> <a name="ReservedIpsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIpsInput"></a>

```go
func ReservedIpsInput() interface{}
```

- *Type:* interface{}

---

##### `ShapeDetailsInput`<sup>Optional</sup> <a name="ShapeDetailsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetailsInput"></a>

```go
func ShapeDetailsInput() LoadBalancerLoadBalancerShapeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpMode`<sup>Required</sup> <a name="IpMode" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipMode"></a>

```go
func IpMode() *string
```

- *Type:* *string

---

##### `IsDeleteProtectionEnabled`<sup>Required</sup> <a name="IsDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabled"></a>

```go
func IsDeleteProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivate"></a>

```go
func IsPrivate() interface{}
```

- *Type:* interface{}

---

##### `IsRequestIdEnabled`<sup>Required</sup> <a name="IsRequestIdEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabled"></a>

```go
func IsRequestIdEnabled() interface{}
```

- *Type:* interface{}

---

##### `NetworkSecurityGroupIds`<sup>Required</sup> <a name="NetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIds"></a>

```go
func NetworkSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `RequestIdHeader`<sup>Required</sup> <a name="RequestIdHeader" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeader"></a>

```go
func RequestIdHeader() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerLoadBalancerConfig <a name="LoadBalancerLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

&loadbalancerloadbalancer.LoadBalancerLoadBalancerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Shape: *string,
	SubnetIds: *[]*string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IpMode: *string,
	IsDeleteProtectionEnabled: interface{},
	IsPrivate: interface{},
	IsRequestIdEnabled: interface{},
	NetworkSecurityGroupIds: *[]*string,
	RequestIdHeader: *string,
	ReservedIps: interface{},
	ShapeDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#compartment_id LoadBalancerLoadBalancer#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#display_name LoadBalancerLoadBalancer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape LoadBalancerLoadBalancer#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#subnet_ids LoadBalancerLoadBalancer#subnet_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#defined_tags LoadBalancerLoadBalancer#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#freeform_tags LoadBalancerLoadBalancer#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.ipMode">IpMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#ip_mode LoadBalancerLoadBalancer#ip_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isDeleteProtectionEnabled">IsDeleteProtectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_delete_protection_enabled LoadBalancerLoadBalancer#is_delete_protection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isPrivate">IsPrivate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_private LoadBalancerLoadBalancer#is_private}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isRequestIdEnabled">IsRequestIdEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_request_id_enabled LoadBalancerLoadBalancer#is_request_id_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.networkSecurityGroupIds">NetworkSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#network_security_group_ids LoadBalancerLoadBalancer#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.requestIdHeader">RequestIdHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#request_id_header LoadBalancerLoadBalancer#request_id_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.reservedIps">ReservedIps</a></code> | <code>interface{}</code> | reserved_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shapeDetails">ShapeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a></code> | shape_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#compartment_id LoadBalancerLoadBalancer#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#display_name LoadBalancerLoadBalancer#display_name}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape LoadBalancerLoadBalancer#shape}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#subnet_ids LoadBalancerLoadBalancer#subnet_ids}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#defined_tags LoadBalancerLoadBalancer#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#freeform_tags LoadBalancerLoadBalancer#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpMode`<sup>Optional</sup> <a name="IpMode" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.ipMode"></a>

```go
IpMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#ip_mode LoadBalancerLoadBalancer#ip_mode}.

---

##### `IsDeleteProtectionEnabled`<sup>Optional</sup> <a name="IsDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isDeleteProtectionEnabled"></a>

```go
IsDeleteProtectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_delete_protection_enabled LoadBalancerLoadBalancer#is_delete_protection_enabled}.

---

##### `IsPrivate`<sup>Optional</sup> <a name="IsPrivate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isPrivate"></a>

```go
IsPrivate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_private LoadBalancerLoadBalancer#is_private}.

---

##### `IsRequestIdEnabled`<sup>Optional</sup> <a name="IsRequestIdEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isRequestIdEnabled"></a>

```go
IsRequestIdEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_request_id_enabled LoadBalancerLoadBalancer#is_request_id_enabled}.

---

##### `NetworkSecurityGroupIds`<sup>Optional</sup> <a name="NetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.networkSecurityGroupIds"></a>

```go
NetworkSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#network_security_group_ids LoadBalancerLoadBalancer#network_security_group_ids}.

---

##### `RequestIdHeader`<sup>Optional</sup> <a name="RequestIdHeader" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.requestIdHeader"></a>

```go
RequestIdHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#request_id_header LoadBalancerLoadBalancer#request_id_header}.

---

##### `ReservedIps`<sup>Optional</sup> <a name="ReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.reservedIps"></a>

```go
ReservedIps interface{}
```

- *Type:* interface{}

reserved_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#reserved_ips LoadBalancerLoadBalancer#reserved_ips}

---

##### `ShapeDetails`<sup>Optional</sup> <a name="ShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shapeDetails"></a>

```go
ShapeDetails LoadBalancerLoadBalancerShapeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

shape_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape_details LoadBalancerLoadBalancer#shape_details}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.timeouts"></a>

```go
Timeouts LoadBalancerLoadBalancerTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#timeouts LoadBalancerLoadBalancer#timeouts}

---

### LoadBalancerLoadBalancerIpAddressDetails <a name="LoadBalancerLoadBalancerIpAddressDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

&loadbalancerloadbalancer.LoadBalancerLoadBalancerIpAddressDetails {

}
```


### LoadBalancerLoadBalancerIpAddressDetailsReservedIp <a name="LoadBalancerLoadBalancerIpAddressDetailsReservedIp" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

&loadbalancerloadbalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp {

}
```


### LoadBalancerLoadBalancerReservedIps <a name="LoadBalancerLoadBalancerReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

&loadbalancerloadbalancer.LoadBalancerLoadBalancerReservedIps {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LoadBalancerLoadBalancerShapeDetails <a name="LoadBalancerLoadBalancerShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

&loadbalancerloadbalancer.LoadBalancerLoadBalancerShapeDetails {
	MaximumBandwidthInMbps: *f64,
	MinimumBandwidthInMbps: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.maximumBandwidthInMbps">MaximumBandwidthInMbps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#maximum_bandwidth_in_mbps LoadBalancerLoadBalancer#maximum_bandwidth_in_mbps}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.minimumBandwidthInMbps">MinimumBandwidthInMbps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#minimum_bandwidth_in_mbps LoadBalancerLoadBalancer#minimum_bandwidth_in_mbps}. |

---

##### `MaximumBandwidthInMbps`<sup>Required</sup> <a name="MaximumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.maximumBandwidthInMbps"></a>

```go
MaximumBandwidthInMbps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#maximum_bandwidth_in_mbps LoadBalancerLoadBalancer#maximum_bandwidth_in_mbps}.

---

##### `MinimumBandwidthInMbps`<sup>Required</sup> <a name="MinimumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.minimumBandwidthInMbps"></a>

```go
MinimumBandwidthInMbps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#minimum_bandwidth_in_mbps LoadBalancerLoadBalancer#minimum_bandwidth_in_mbps}.

---

### LoadBalancerLoadBalancerTimeouts <a name="LoadBalancerLoadBalancerTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

&loadbalancerloadbalancer.LoadBalancerLoadBalancerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#create LoadBalancerLoadBalancer#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#delete LoadBalancerLoadBalancer#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#update LoadBalancerLoadBalancer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#create LoadBalancerLoadBalancer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#delete LoadBalancerLoadBalancer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#update LoadBalancerLoadBalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerLoadBalancerIpAddressDetailsList <a name="LoadBalancerLoadBalancerIpAddressDetailsList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.NewLoadBalancerLoadBalancerIpAddressDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadBalancerLoadBalancerIpAddressDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.get"></a>

```go
func Get(index *f64) LoadBalancerLoadBalancerIpAddressDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LoadBalancerLoadBalancerIpAddressDetailsOutputReference <a name="LoadBalancerLoadBalancerIpAddressDetailsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.NewLoadBalancerLoadBalancerIpAddressDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadBalancerLoadBalancerIpAddressDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.isPublic">IsPublic</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.reservedIp">ReservedIp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList">LoadBalancerLoadBalancerIpAddressDetailsReservedIpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails">LoadBalancerLoadBalancerIpAddressDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.isPublic"></a>

```go
func IsPublic() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReservedIp`<sup>Required</sup> <a name="ReservedIp" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.reservedIp"></a>

```go
func ReservedIp() LoadBalancerLoadBalancerIpAddressDetailsReservedIpList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList">LoadBalancerLoadBalancerIpAddressDetailsReservedIpList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadBalancerLoadBalancerIpAddressDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails">LoadBalancerLoadBalancerIpAddressDetails</a>

---


### LoadBalancerLoadBalancerIpAddressDetailsReservedIpList <a name="LoadBalancerLoadBalancerIpAddressDetailsReservedIpList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.NewLoadBalancerLoadBalancerIpAddressDetailsReservedIpList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadBalancerLoadBalancerIpAddressDetailsReservedIpList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.get"></a>

```go
func Get(index *f64) LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference <a name="LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.NewLoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp">LoadBalancerLoadBalancerIpAddressDetailsReservedIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadBalancerLoadBalancerIpAddressDetailsReservedIp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp">LoadBalancerLoadBalancerIpAddressDetailsReservedIp</a>

---


### LoadBalancerLoadBalancerReservedIpsList <a name="LoadBalancerLoadBalancerReservedIpsList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.NewLoadBalancerLoadBalancerReservedIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadBalancerLoadBalancerReservedIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.get"></a>

```go
func Get(index *f64) LoadBalancerLoadBalancerReservedIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadBalancerLoadBalancerReservedIpsOutputReference <a name="LoadBalancerLoadBalancerReservedIpsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.NewLoadBalancerLoadBalancerReservedIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadBalancerLoadBalancerReservedIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadBalancerLoadBalancerShapeDetailsOutputReference <a name="LoadBalancerLoadBalancerShapeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.NewLoadBalancerLoadBalancerShapeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerLoadBalancerShapeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbpsInput">MaximumBandwidthInMbpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbpsInput">MinimumBandwidthInMbpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbps">MaximumBandwidthInMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbps">MinimumBandwidthInMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBandwidthInMbpsInput`<sup>Optional</sup> <a name="MaximumBandwidthInMbpsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbpsInput"></a>

```go
func MaximumBandwidthInMbpsInput() *f64
```

- *Type:* *f64

---

##### `MinimumBandwidthInMbpsInput`<sup>Optional</sup> <a name="MinimumBandwidthInMbpsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbpsInput"></a>

```go
func MinimumBandwidthInMbpsInput() *f64
```

- *Type:* *f64

---

##### `MaximumBandwidthInMbps`<sup>Required</sup> <a name="MaximumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbps"></a>

```go
func MaximumBandwidthInMbps() *f64
```

- *Type:* *f64

---

##### `MinimumBandwidthInMbps`<sup>Required</sup> <a name="MinimumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbps"></a>

```go
func MinimumBandwidthInMbps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadBalancerLoadBalancerShapeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

---


### LoadBalancerLoadBalancerTimeoutsOutputReference <a name="LoadBalancerLoadBalancerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerloadbalancer"

loadbalancerloadbalancer.NewLoadBalancerLoadBalancerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerLoadBalancerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



