# `networkLoadBalancerNetworkLoadBalancersBackendSetsUnified` Submodule <a name="`networkLoadBalancerNetworkLoadBalancersBackendSetsUnified` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified oci_network_load_balancer_network_load_balancers_backend_sets_unified}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

networkloadbalancernetworkloadbalancersbackendsetsunified.NewNetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified(scope Construct, id *string, config NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig) NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends">PutBackends</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker">PutHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetBackends">ResetBackends</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIpVersion">ResetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsFailOpen">ResetIsFailOpen</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsInstantFailoverEnabled">ResetIsInstantFailoverEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsPreserveSource">ResetIsPreserveSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackends` <a name="PutBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends"></a>

```go
func PutBackends(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHealthChecker` <a name="PutHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker"></a>

```go
func PutHealthChecker(value NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts"></a>

```go
func PutTimeouts(value NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

---

##### `ResetBackends` <a name="ResetBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetBackends"></a>

```go
func ResetBackends()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetId"></a>

```go
func ResetId()
```

##### `ResetIpVersion` <a name="ResetIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIpVersion"></a>

```go
func ResetIpVersion()
```

##### `ResetIsFailOpen` <a name="ResetIsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsFailOpen"></a>

```go
func ResetIsFailOpen()
```

##### `ResetIsInstantFailoverEnabled` <a name="ResetIsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsInstantFailoverEnabled"></a>

```go
func ResetIsInstantFailoverEnabled()
```

##### `ResetIsPreserveSource` <a name="ResetIsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsPreserveSource"></a>

```go
func ResetIsPreserveSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

networkloadbalancernetworkloadbalancersbackendsetsunified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

networkloadbalancernetworkloadbalancersbackendsetsunified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

networkloadbalancernetworkloadbalancersbackendsetsunified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

networkloadbalancernetworkloadbalancersbackendsetsunified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backends">Backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthChecker">HealthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backendsInput">BackendsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthCheckerInput">HealthCheckerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersionInput">IpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpenInput">IsFailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabledInput">IsInstantFailoverEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSourceInput">IsPreserveSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersion">IpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpen">IsFailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabled">IsInstantFailoverEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSource">IsPreserveSource</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backends`<sup>Required</sup> <a name="Backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backends"></a>

```go
func Backends() NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList</a>

---

##### `HealthChecker`<sup>Required</sup> <a name="HealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthChecker"></a>

```go
func HealthChecker() NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeouts"></a>

```go
func Timeouts() NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference</a>

---

##### `BackendsInput`<sup>Optional</sup> <a name="BackendsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backendsInput"></a>

```go
func BackendsInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckerInput`<sup>Optional</sup> <a name="HealthCheckerInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthCheckerInput"></a>

```go
func HealthCheckerInput() NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpVersionInput`<sup>Optional</sup> <a name="IpVersionInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersionInput"></a>

```go
func IpVersionInput() *string
```

- *Type:* *string

---

##### `IsFailOpenInput`<sup>Optional</sup> <a name="IsFailOpenInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpenInput"></a>

```go
func IsFailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `IsInstantFailoverEnabledInput`<sup>Optional</sup> <a name="IsInstantFailoverEnabledInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabledInput"></a>

```go
func IsInstantFailoverEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsPreserveSourceInput`<sup>Optional</sup> <a name="IsPreserveSourceInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSourceInput"></a>

```go
func IsPreserveSourceInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerIdInput"></a>

```go
func NetworkLoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersion"></a>

```go
func IpVersion() *string
```

- *Type:* *string

---

##### `IsFailOpen`<sup>Required</sup> <a name="IsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpen"></a>

```go
func IsFailOpen() interface{}
```

- *Type:* interface{}

---

##### `IsInstantFailoverEnabled`<sup>Required</sup> <a name="IsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabled"></a>

```go
func IsInstantFailoverEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsPreserveSource`<sup>Required</sup> <a name="IsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSource"></a>

```go
func IsPreserveSource() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

&networkloadbalancernetworkloadbalancersbackendsetsunified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends {
	Port: *f64,
	IpAddress: *string,
	IsBackup: interface{},
	IsDrain: interface{},
	IsOffline: interface{},
	Name: *string,
	TargetId: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_address NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isBackup">IsBackup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_backup NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isDrain">IsDrain</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_drain NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_drain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isOffline">IsOffline</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_offline NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_offline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#target_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#weight NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#weight}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_address NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_address}.

---

##### `IsBackup`<sup>Optional</sup> <a name="IsBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isBackup"></a>

```go
IsBackup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_backup NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_backup}.

---

##### `IsDrain`<sup>Optional</sup> <a name="IsDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isDrain"></a>

```go
IsDrain interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_drain NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_drain}.

---

##### `IsOffline`<sup>Optional</sup> <a name="IsOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isOffline"></a>

```go
IsOffline interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_offline NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_offline}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#target_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#target_id}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#weight NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#weight}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

&networkloadbalancernetworkloadbalancersbackendsetsunified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HealthChecker: github.com/rhizo-co/cdktf-provider-oci-go/oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker,
	Name: *string,
	NetworkLoadBalancerId: *string,
	Policy: *string,
	Backends: interface{},
	Id: *string,
	IpVersion: *string,
	IsFailOpen: interface{},
	IsInstantFailoverEnabled: interface{},
	IsPreserveSource: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.healthChecker">HealthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.backends">Backends</a></code> | <code>interface{}</code> | backends block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.ipVersion">IpVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isFailOpen">IsFailOpen</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isInstantFailoverEnabled">IsInstantFailoverEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isPreserveSource">IsPreserveSource</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HealthChecker`<sup>Required</sup> <a name="HealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.healthChecker"></a>

```go
HealthChecker NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#health_checker NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#health_checker}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}.

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.networkLoadBalancerId"></a>

```go
NetworkLoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}.

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}.

---

##### `Backends`<sup>Optional</sup> <a name="Backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.backends"></a>

```go
Backends interface{}
```

- *Type:* interface{}

backends block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#backends NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#backends}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpVersion`<sup>Optional</sup> <a name="IpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.ipVersion"></a>

```go
IpVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}.

---

##### `IsFailOpen`<sup>Optional</sup> <a name="IsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isFailOpen"></a>

```go
IsFailOpen interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}.

---

##### `IsInstantFailoverEnabled`<sup>Optional</sup> <a name="IsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isInstantFailoverEnabled"></a>

```go
IsInstantFailoverEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}.

---

##### `IsPreserveSource`<sup>Optional</sup> <a name="IsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isPreserveSource"></a>

```go
IsPreserveSource interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.timeouts"></a>

```go
Timeouts NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeouts NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeouts}

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

&networkloadbalancernetworkloadbalancersbackendsetsunified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker {
	Protocol: *string,
	Dns: github.com/rhizo-co/cdktf-provider-oci-go/oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns,
	IntervalInMillis: *f64,
	Port: *f64,
	RequestData: *string,
	ResponseBodyRegex: *string,
	ResponseData: *string,
	Retries: *f64,
	ReturnCode: *f64,
	TimeoutInMillis: *f64,
	UrlPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.dns">Dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | dns block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.intervalInMillis">IntervalInMillis</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#interval_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#interval_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.requestData">RequestData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#request_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#request_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseBodyRegex">ResponseBodyRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_body_regex NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseData">ResponseData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.retries">Retries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#retries NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.returnCode">ReturnCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#return_code NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeout_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.urlPath">UrlPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#url_path NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#url_path}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#protocol}.

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.dns"></a>

```go
Dns NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#dns NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#dns}

---

##### `IntervalInMillis`<sup>Optional</sup> <a name="IntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.intervalInMillis"></a>

```go
IntervalInMillis *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#interval_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#interval_in_millis}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}.

---

##### `RequestData`<sup>Optional</sup> <a name="RequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.requestData"></a>

```go
RequestData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#request_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#request_data}.

---

##### `ResponseBodyRegex`<sup>Optional</sup> <a name="ResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseBodyRegex"></a>

```go
ResponseBodyRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_body_regex NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_body_regex}.

---

##### `ResponseData`<sup>Optional</sup> <a name="ResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseData"></a>

```go
ResponseData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_data}.

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#retries NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#retries}.

---

##### `ReturnCode`<sup>Optional</sup> <a name="ReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.returnCode"></a>

```go
ReturnCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#return_code NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#return_code}.

---

##### `TimeoutInMillis`<sup>Optional</sup> <a name="TimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.timeoutInMillis"></a>

```go
TimeoutInMillis *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeout_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeout_in_millis}.

---

##### `UrlPath`<sup>Optional</sup> <a name="UrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.urlPath"></a>

```go
UrlPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#url_path NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#url_path}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

&networkloadbalancernetworkloadbalancersbackendsetsunified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns {
	DomainName: *string,
	QueryClass: *string,
	QueryType: *string,
	Rcodes: *[]*string,
	TransportProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#domain_name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#domain_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryClass">QueryClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryType">QueryType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_type NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.rcodes">Rcodes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#rcodes NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#rcodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.transportProtocol">TransportProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#transport_protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#transport_protocol}. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#domain_name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#domain_name}.

---

##### `QueryClass`<sup>Optional</sup> <a name="QueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryClass"></a>

```go
QueryClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_class}.

---

##### `QueryType`<sup>Optional</sup> <a name="QueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryType"></a>

```go
QueryType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_type NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_type}.

---

##### `Rcodes`<sup>Optional</sup> <a name="Rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.rcodes"></a>

```go
Rcodes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#rcodes NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#rcodes}.

---

##### `TransportProtocol`<sup>Optional</sup> <a name="TransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.transportProtocol"></a>

```go
TransportProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#transport_protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#transport_protocol}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

&networkloadbalancernetworkloadbalancersbackendsetsunified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#create NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#delete NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#update NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#create NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#delete NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#update NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

networkloadbalancernetworkloadbalancersbackendsetsunified.NewNetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get"></a>

```go
func Get(index *f64) NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

networkloadbalancernetworkloadbalancersbackendsetsunified.NewNetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsBackup">ResetIsBackup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsDrain">ResetIsDrain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsOffline">ResetIsOffline</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddress` <a name="ResetIpAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetIsBackup` <a name="ResetIsBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsBackup"></a>

```go
func ResetIsBackup()
```

##### `ResetIsDrain` <a name="ResetIsDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsDrain"></a>

```go
func ResetIsDrain()
```

##### `ResetIsOffline` <a name="ResetIsOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsOffline"></a>

```go
func ResetIsOffline()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetTargetId"></a>

```go
func ResetTargetId()
```

##### `ResetWeight` <a name="ResetWeight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackupInput">IsBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrainInput">IsDrainInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOfflineInput">IsOfflineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackup">IsBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrain">IsDrain</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOffline">IsOffline</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `IsBackupInput`<sup>Optional</sup> <a name="IsBackupInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackupInput"></a>

```go
func IsBackupInput() interface{}
```

- *Type:* interface{}

---

##### `IsDrainInput`<sup>Optional</sup> <a name="IsDrainInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrainInput"></a>

```go
func IsDrainInput() interface{}
```

- *Type:* interface{}

---

##### `IsOfflineInput`<sup>Optional</sup> <a name="IsOfflineInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOfflineInput"></a>

```go
func IsOfflineInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IsBackup`<sup>Required</sup> <a name="IsBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackup"></a>

```go
func IsBackup() interface{}
```

- *Type:* interface{}

---

##### `IsDrain`<sup>Required</sup> <a name="IsDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrain"></a>

```go
func IsDrain() interface{}
```

- *Type:* interface{}

---

##### `IsOffline`<sup>Required</sup> <a name="IsOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOffline"></a>

```go
func IsOffline() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

networkloadbalancernetworkloadbalancersbackendsetsunified.NewNetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryClass">ResetQueryClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryType">ResetQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetRcodes">ResetRcodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetTransportProtocol">ResetTransportProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueryClass` <a name="ResetQueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryClass"></a>

```go
func ResetQueryClass()
```

##### `ResetQueryType` <a name="ResetQueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryType"></a>

```go
func ResetQueryType()
```

##### `ResetRcodes` <a name="ResetRcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetRcodes"></a>

```go
func ResetRcodes()
```

##### `ResetTransportProtocol` <a name="ResetTransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetTransportProtocol"></a>

```go
func ResetTransportProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClassInput">QueryClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryTypeInput">QueryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodesInput">RcodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocolInput">TransportProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClass">QueryClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryType">QueryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodes">Rcodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocol">TransportProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `QueryClassInput`<sup>Optional</sup> <a name="QueryClassInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClassInput"></a>

```go
func QueryClassInput() *string
```

- *Type:* *string

---

##### `QueryTypeInput`<sup>Optional</sup> <a name="QueryTypeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryTypeInput"></a>

```go
func QueryTypeInput() *string
```

- *Type:* *string

---

##### `RcodesInput`<sup>Optional</sup> <a name="RcodesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodesInput"></a>

```go
func RcodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TransportProtocolInput`<sup>Optional</sup> <a name="TransportProtocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocolInput"></a>

```go
func TransportProtocolInput() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `QueryClass`<sup>Required</sup> <a name="QueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClass"></a>

```go
func QueryClass() *string
```

- *Type:* *string

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryType"></a>

```go
func QueryType() *string
```

- *Type:* *string

---

##### `Rcodes`<sup>Required</sup> <a name="Rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodes"></a>

```go
func Rcodes() *[]*string
```

- *Type:* *[]*string

---

##### `TransportProtocol`<sup>Required</sup> <a name="TransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```go
func TransportProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

networkloadbalancernetworkloadbalancersbackendsetsunified.NewNetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetIntervalInMillis">ResetIntervalInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRequestData">ResetRequestData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseBodyRegex">ResetResponseBodyRegex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseData">ResetResponseData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetReturnCode">ResetReturnCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetTimeoutInMillis">ResetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetUrlPath">ResetUrlPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDns` <a name="PutDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns"></a>

```go
func PutDns(value NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

---

##### `ResetDns` <a name="ResetDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetDns"></a>

```go
func ResetDns()
```

##### `ResetIntervalInMillis` <a name="ResetIntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetIntervalInMillis"></a>

```go
func ResetIntervalInMillis()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRequestData` <a name="ResetRequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRequestData"></a>

```go
func ResetRequestData()
```

##### `ResetResponseBodyRegex` <a name="ResetResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```go
func ResetResponseBodyRegex()
```

##### `ResetResponseData` <a name="ResetResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseData"></a>

```go
func ResetResponseData()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetReturnCode` <a name="ResetReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetReturnCode"></a>

```go
func ResetReturnCode()
```

##### `ResetTimeoutInMillis` <a name="ResetTimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```go
func ResetTimeoutInMillis()
```

##### `ResetUrlPath` <a name="ResetUrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetUrlPath"></a>

```go
func ResetUrlPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dns">Dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dnsInput">DnsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillisInput">IntervalInMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestDataInput">RequestDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegexInput">ResponseBodyRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseDataInput">ResponseDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCodeInput">ReturnCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillisInput">TimeoutInMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPathInput">UrlPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillis">IntervalInMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestData">RequestData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegex">ResponseBodyRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseData">ResponseData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCode">ReturnCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPath">UrlPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dns"></a>

```go
func Dns() NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dnsInput"></a>

```go
func DnsInput() NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

---

##### `IntervalInMillisInput`<sup>Optional</sup> <a name="IntervalInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillisInput"></a>

```go
func IntervalInMillisInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RequestDataInput`<sup>Optional</sup> <a name="RequestDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestDataInput"></a>

```go
func RequestDataInput() *string
```

- *Type:* *string

---

##### `ResponseBodyRegexInput`<sup>Optional</sup> <a name="ResponseBodyRegexInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```go
func ResponseBodyRegexInput() *string
```

- *Type:* *string

---

##### `ResponseDataInput`<sup>Optional</sup> <a name="ResponseDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseDataInput"></a>

```go
func ResponseDataInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `ReturnCodeInput`<sup>Optional</sup> <a name="ReturnCodeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCodeInput"></a>

```go
func ReturnCodeInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInMillisInput`<sup>Optional</sup> <a name="TimeoutInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```go
func TimeoutInMillisInput() *f64
```

- *Type:* *f64

---

##### `UrlPathInput`<sup>Optional</sup> <a name="UrlPathInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPathInput"></a>

```go
func UrlPathInput() *string
```

- *Type:* *string

---

##### `IntervalInMillis`<sup>Required</sup> <a name="IntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillis"></a>

```go
func IntervalInMillis() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RequestData`<sup>Required</sup> <a name="RequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestData"></a>

```go
func RequestData() *string
```

- *Type:* *string

---

##### `ResponseBodyRegex`<sup>Required</sup> <a name="ResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegex"></a>

```go
func ResponseBodyRegex() *string
```

- *Type:* *string

---

##### `ResponseData`<sup>Required</sup> <a name="ResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseData"></a>

```go
func ResponseData() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `ReturnCode`<sup>Required</sup> <a name="ReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCode"></a>

```go
func ReturnCode() *f64
```

- *Type:* *f64

---

##### `TimeoutInMillis`<sup>Required</sup> <a name="TimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillis"></a>

```go
func TimeoutInMillis() *f64
```

- *Type:* *f64

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPath"></a>

```go
func UrlPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancernetworkloadbalancersbackendsetsunified"

networkloadbalancernetworkloadbalancersbackendsetsunified.NewNetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



