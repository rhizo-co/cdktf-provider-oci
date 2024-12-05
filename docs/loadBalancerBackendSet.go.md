# `loadBalancerBackendset` Submodule <a name="`loadBalancerBackendset` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerBackendset <a name="LoadBalancerBackendset" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset oci_load_balancer_backendset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.NewLoadBalancerBackendset(scope Construct, id *string, config LoadBalancerBackendsetConfig) LoadBalancerBackendset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig">LoadBalancerBackendsetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig">LoadBalancerBackendsetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker">PutHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration">PutLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration">PutSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration">PutSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetBackendMaxConnections">ResetBackendMaxConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetLbCookieSessionPersistenceConfiguration">ResetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSessionPersistenceConfiguration">ResetSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSslConfiguration">ResetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthChecker` <a name="PutHealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker"></a>

```go
func PutHealthChecker(value LoadBalancerBackendsetHealthChecker)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---

##### `PutLbCookieSessionPersistenceConfiguration` <a name="PutLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration"></a>

```go
func PutLbCookieSessionPersistenceConfiguration(value LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---

##### `PutSessionPersistenceConfiguration` <a name="PutSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration"></a>

```go
func PutSessionPersistenceConfiguration(value LoadBalancerBackendsetSessionPersistenceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---

##### `PutSslConfiguration` <a name="PutSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration"></a>

```go
func PutSslConfiguration(value LoadBalancerBackendsetSslConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts"></a>

```go
func PutTimeouts(value LoadBalancerBackendsetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

---

##### `ResetBackendMaxConnections` <a name="ResetBackendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetBackendMaxConnections"></a>

```go
func ResetBackendMaxConnections()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetId"></a>

```go
func ResetId()
```

##### `ResetLbCookieSessionPersistenceConfiguration` <a name="ResetLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetLbCookieSessionPersistenceConfiguration"></a>

```go
func ResetLbCookieSessionPersistenceConfiguration()
```

##### `ResetSessionPersistenceConfiguration` <a name="ResetSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSessionPersistenceConfiguration"></a>

```go
func ResetSessionPersistenceConfiguration()
```

##### `ResetSslConfiguration` <a name="ResetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSslConfiguration"></a>

```go
func ResetSslConfiguration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerBackendset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.LoadBalancerBackendset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.LoadBalancerBackendset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.LoadBalancerBackendset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.LoadBalancerBackendset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LoadBalancerBackendset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LoadBalancerBackendset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LoadBalancerBackendset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerBackendset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backend">Backend</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList">LoadBalancerBackendsetBackendList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthChecker">HealthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference">LoadBalancerBackendsetHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfiguration">LbCookieSessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfiguration">SessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfiguration">SslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference">LoadBalancerBackendsetSslConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference">LoadBalancerBackendsetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnectionsInput">BackendMaxConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthCheckerInput">HealthCheckerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfigurationInput">LbCookieSessionPersistenceConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfigurationInput">SessionPersistenceConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfigurationInput">SslConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnections">BackendMaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backend"></a>

```go
func Backend() LoadBalancerBackendsetBackendList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList">LoadBalancerBackendsetBackendList</a>

---

##### `HealthChecker`<sup>Required</sup> <a name="HealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthChecker"></a>

```go
func HealthChecker() LoadBalancerBackendsetHealthCheckerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference">LoadBalancerBackendsetHealthCheckerOutputReference</a>

---

##### `LbCookieSessionPersistenceConfiguration`<sup>Required</sup> <a name="LbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfiguration"></a>

```go
func LbCookieSessionPersistenceConfiguration() LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference</a>

---

##### `SessionPersistenceConfiguration`<sup>Required</sup> <a name="SessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfiguration"></a>

```go
func SessionPersistenceConfiguration() LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference</a>

---

##### `SslConfiguration`<sup>Required</sup> <a name="SslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfiguration"></a>

```go
func SslConfiguration() LoadBalancerBackendsetSslConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference">LoadBalancerBackendsetSslConfigurationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeouts"></a>

```go
func Timeouts() LoadBalancerBackendsetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference">LoadBalancerBackendsetTimeoutsOutputReference</a>

---

##### `BackendMaxConnectionsInput`<sup>Optional</sup> <a name="BackendMaxConnectionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnectionsInput"></a>

```go
func BackendMaxConnectionsInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckerInput`<sup>Optional</sup> <a name="HealthCheckerInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthCheckerInput"></a>

```go
func HealthCheckerInput() LoadBalancerBackendsetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LbCookieSessionPersistenceConfigurationInput`<sup>Optional</sup> <a name="LbCookieSessionPersistenceConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfigurationInput"></a>

```go
func LbCookieSessionPersistenceConfigurationInput() LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `SessionPersistenceConfigurationInput`<sup>Optional</sup> <a name="SessionPersistenceConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfigurationInput"></a>

```go
func SessionPersistenceConfigurationInput() LoadBalancerBackendsetSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---

##### `SslConfigurationInput`<sup>Optional</sup> <a name="SslConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfigurationInput"></a>

```go
func SslConfigurationInput() LoadBalancerBackendsetSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackendMaxConnections`<sup>Required</sup> <a name="BackendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnections"></a>

```go
func BackendMaxConnections() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerBackendsetBackend <a name="LoadBalancerBackendsetBackend" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

&loadbalancerbackendset.LoadBalancerBackendsetBackend {

}
```


### LoadBalancerBackendsetConfig <a name="LoadBalancerBackendsetConfig" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

&loadbalancerbackendset.LoadBalancerBackendsetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HealthChecker: github.com/rhizo-co/cdktf-provider-oci-go/oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker,
	LoadBalancerId: *string,
	Name: *string,
	Policy: *string,
	BackendMaxConnections: *f64,
	Id: *string,
	LbCookieSessionPersistenceConfiguration: github.com/rhizo-co/cdktf-provider-oci-go/oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration,
	SessionPersistenceConfiguration: github.com/rhizo-co/cdktf-provider-oci-go/oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration,
	SslConfiguration: github.com/rhizo-co/cdktf-provider-oci-go/oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.healthChecker">HealthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.backendMaxConnections">BackendMaxConnections</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lbCookieSessionPersistenceConfiguration">LbCookieSessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | lb_cookie_session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sessionPersistenceConfiguration">SessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sslConfiguration">SslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HealthChecker`<sup>Required</sup> <a name="HealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.healthChecker"></a>

```go
HealthChecker LoadBalancerBackendsetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#health_checker LoadBalancerBackendset#health_checker}

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}.

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}.

---

##### `BackendMaxConnections`<sup>Optional</sup> <a name="BackendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.backendMaxConnections"></a>

```go
BackendMaxConnections *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LbCookieSessionPersistenceConfiguration`<sup>Optional</sup> <a name="LbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lbCookieSessionPersistenceConfiguration"></a>

```go
LbCookieSessionPersistenceConfiguration LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

lb_cookie_session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#lb_cookie_session_persistence_configuration LoadBalancerBackendset#lb_cookie_session_persistence_configuration}

---

##### `SessionPersistenceConfiguration`<sup>Optional</sup> <a name="SessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sessionPersistenceConfiguration"></a>

```go
SessionPersistenceConfiguration LoadBalancerBackendsetSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#session_persistence_configuration LoadBalancerBackendset#session_persistence_configuration}

---

##### `SslConfiguration`<sup>Optional</sup> <a name="SslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sslConfiguration"></a>

```go
SslConfiguration LoadBalancerBackendsetSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#ssl_configuration LoadBalancerBackendset#ssl_configuration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.timeouts"></a>

```go
Timeouts LoadBalancerBackendsetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeouts LoadBalancerBackendset#timeouts}

---

### LoadBalancerBackendsetHealthChecker <a name="LoadBalancerBackendsetHealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

&loadbalancerbackendset.LoadBalancerBackendsetHealthChecker {
	Protocol: *string,
	IntervalMs: *f64,
	IsForcePlainText: interface{},
	Port: *f64,
	ResponseBodyRegex: *string,
	Retries: *f64,
	ReturnCode: *f64,
	TimeoutInMillis: *f64,
	UrlPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocol LoadBalancerBackendset#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.intervalMs">IntervalMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#interval_ms LoadBalancerBackendset#interval_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.isForcePlainText">IsForcePlainText</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_force_plain_text LoadBalancerBackendset#is_force_plain_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#port LoadBalancerBackendset#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.responseBodyRegex">ResponseBodyRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#response_body_regex LoadBalancerBackendset#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.retries">Retries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#retries LoadBalancerBackendset#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.returnCode">ReturnCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#return_code LoadBalancerBackendset#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeout_in_millis LoadBalancerBackendset#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.urlPath">UrlPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#url_path LoadBalancerBackendset#url_path}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocol LoadBalancerBackendset#protocol}.

---

##### `IntervalMs`<sup>Optional</sup> <a name="IntervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.intervalMs"></a>

```go
IntervalMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#interval_ms LoadBalancerBackendset#interval_ms}.

---

##### `IsForcePlainText`<sup>Optional</sup> <a name="IsForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.isForcePlainText"></a>

```go
IsForcePlainText interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_force_plain_text LoadBalancerBackendset#is_force_plain_text}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#port LoadBalancerBackendset#port}.

---

##### `ResponseBodyRegex`<sup>Optional</sup> <a name="ResponseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.responseBodyRegex"></a>

```go
ResponseBodyRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#response_body_regex LoadBalancerBackendset#response_body_regex}.

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#retries LoadBalancerBackendset#retries}.

---

##### `ReturnCode`<sup>Optional</sup> <a name="ReturnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.returnCode"></a>

```go
ReturnCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#return_code LoadBalancerBackendset#return_code}.

---

##### `TimeoutInMillis`<sup>Optional</sup> <a name="TimeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.timeoutInMillis"></a>

```go
TimeoutInMillis *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeout_in_millis LoadBalancerBackendset#timeout_in_millis}.

---

##### `UrlPath`<sup>Optional</sup> <a name="UrlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.urlPath"></a>

```go
UrlPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#url_path LoadBalancerBackendset#url_path}.

---

### LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration <a name="LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

&loadbalancerbackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration {
	CookieName: *string,
	DisableFallback: interface{},
	Domain: *string,
	IsHttpOnly: interface{},
	IsSecure: interface{},
	MaxAgeInSeconds: *f64,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.cookieName">CookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.disableFallback">DisableFallback</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#domain LoadBalancerBackendset#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isHttpOnly">IsHttpOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_http_only LoadBalancerBackendset#is_http_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isSecure">IsSecure</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_secure LoadBalancerBackendset#is_secure}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#max_age_in_seconds LoadBalancerBackendset#max_age_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#path LoadBalancerBackendset#path}. |

---

##### `CookieName`<sup>Optional</sup> <a name="CookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.cookieName"></a>

```go
CookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

##### `DisableFallback`<sup>Optional</sup> <a name="DisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.disableFallback"></a>

```go
DisableFallback interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#domain LoadBalancerBackendset#domain}.

---

##### `IsHttpOnly`<sup>Optional</sup> <a name="IsHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isHttpOnly"></a>

```go
IsHttpOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_http_only LoadBalancerBackendset#is_http_only}.

---

##### `IsSecure`<sup>Optional</sup> <a name="IsSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isSecure"></a>

```go
IsSecure interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_secure LoadBalancerBackendset#is_secure}.

---

##### `MaxAgeInSeconds`<sup>Optional</sup> <a name="MaxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.maxAgeInSeconds"></a>

```go
MaxAgeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#max_age_in_seconds LoadBalancerBackendset#max_age_in_seconds}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#path LoadBalancerBackendset#path}.

---

### LoadBalancerBackendsetSessionPersistenceConfiguration <a name="LoadBalancerBackendsetSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

&loadbalancerbackendset.LoadBalancerBackendsetSessionPersistenceConfiguration {
	CookieName: *string,
	DisableFallback: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.cookieName">CookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.disableFallback">DisableFallback</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}. |

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.cookieName"></a>

```go
CookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

##### `DisableFallback`<sup>Optional</sup> <a name="DisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.disableFallback"></a>

```go
DisableFallback interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

### LoadBalancerBackendsetSslConfiguration <a name="LoadBalancerBackendsetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

&loadbalancerbackendset.LoadBalancerBackendsetSslConfiguration {
	CertificateIds: *[]*string,
	CertificateName: *string,
	CipherSuiteName: *string,
	Protocols: *[]*string,
	ServerOrderPreference: *string,
	TrustedCertificateAuthorityIds: *[]*string,
	VerifyDepth: *f64,
	VerifyPeerCertificate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateIds">CertificateIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_ids LoadBalancerBackendset#certificate_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateName">CertificateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_name LoadBalancerBackendset#certificate_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.cipherSuiteName">CipherSuiteName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cipher_suite_name LoadBalancerBackendset#cipher_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocols LoadBalancerBackendset#protocols}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#server_order_preference LoadBalancerBackendset#server_order_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.trustedCertificateAuthorityIds">TrustedCertificateAuthorityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#trusted_certificate_authority_ids LoadBalancerBackendset#trusted_certificate_authority_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyDepth">VerifyDepth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_depth LoadBalancerBackendset#verify_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyPeerCertificate">VerifyPeerCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_peer_certificate LoadBalancerBackendset#verify_peer_certificate}. |

---

##### `CertificateIds`<sup>Optional</sup> <a name="CertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateIds"></a>

```go
CertificateIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_ids LoadBalancerBackendset#certificate_ids}.

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_name LoadBalancerBackendset#certificate_name}.

---

##### `CipherSuiteName`<sup>Optional</sup> <a name="CipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.cipherSuiteName"></a>

```go
CipherSuiteName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cipher_suite_name LoadBalancerBackendset#cipher_suite_name}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocols LoadBalancerBackendset#protocols}.

---

##### `ServerOrderPreference`<sup>Optional</sup> <a name="ServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.serverOrderPreference"></a>

```go
ServerOrderPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#server_order_preference LoadBalancerBackendset#server_order_preference}.

---

##### `TrustedCertificateAuthorityIds`<sup>Optional</sup> <a name="TrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.trustedCertificateAuthorityIds"></a>

```go
TrustedCertificateAuthorityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#trusted_certificate_authority_ids LoadBalancerBackendset#trusted_certificate_authority_ids}.

---

##### `VerifyDepth`<sup>Optional</sup> <a name="VerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyDepth"></a>

```go
VerifyDepth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_depth LoadBalancerBackendset#verify_depth}.

---

##### `VerifyPeerCertificate`<sup>Optional</sup> <a name="VerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyPeerCertificate"></a>

```go
VerifyPeerCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_peer_certificate LoadBalancerBackendset#verify_peer_certificate}.

---

### LoadBalancerBackendsetTimeouts <a name="LoadBalancerBackendsetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

&loadbalancerbackendset.LoadBalancerBackendsetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#create LoadBalancerBackendset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#delete LoadBalancerBackendset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#update LoadBalancerBackendset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#create LoadBalancerBackendset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#delete LoadBalancerBackendset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#update LoadBalancerBackendset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerBackendsetBackendList <a name="LoadBalancerBackendsetBackendList" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.NewLoadBalancerBackendsetBackendList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadBalancerBackendsetBackendList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get"></a>

```go
func Get(index *f64) LoadBalancerBackendsetBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LoadBalancerBackendsetBackendOutputReference <a name="LoadBalancerBackendsetBackendOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.NewLoadBalancerBackendsetBackendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadBalancerBackendsetBackendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.backup">Backup</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.drain">Drain</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.offline">Offline</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend">LoadBalancerBackendsetBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.backup"></a>

```go
func Backup() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Drain`<sup>Required</sup> <a name="Drain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.drain"></a>

```go
func Drain() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Offline`<sup>Required</sup> <a name="Offline" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.offline"></a>

```go
func Offline() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadBalancerBackendsetBackend
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend">LoadBalancerBackendsetBackend</a>

---


### LoadBalancerBackendsetHealthCheckerOutputReference <a name="LoadBalancerBackendsetHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.NewLoadBalancerBackendsetHealthCheckerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerBackendsetHealthCheckerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIntervalMs">ResetIntervalMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIsForcePlainText">ResetIsForcePlainText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetResponseBodyRegex">ResetResponseBodyRegex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetReturnCode">ResetReturnCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetTimeoutInMillis">ResetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetUrlPath">ResetUrlPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalMs` <a name="ResetIntervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIntervalMs"></a>

```go
func ResetIntervalMs()
```

##### `ResetIsForcePlainText` <a name="ResetIsForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIsForcePlainText"></a>

```go
func ResetIsForcePlainText()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetResponseBodyRegex` <a name="ResetResponseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```go
func ResetResponseBodyRegex()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetReturnCode` <a name="ResetReturnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetReturnCode"></a>

```go
func ResetReturnCode()
```

##### `ResetTimeoutInMillis` <a name="ResetTimeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```go
func ResetTimeoutInMillis()
```

##### `ResetUrlPath` <a name="ResetUrlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetUrlPath"></a>

```go
func ResetUrlPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMsInput">IntervalMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainTextInput">IsForcePlainTextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegexInput">ResponseBodyRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCodeInput">ReturnCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillisInput">TimeoutInMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPathInput">UrlPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMs">IntervalMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainText">IsForcePlainText</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegex">ResponseBodyRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCode">ReturnCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPath">UrlPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalMsInput`<sup>Optional</sup> <a name="IntervalMsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMsInput"></a>

```go
func IntervalMsInput() *f64
```

- *Type:* *f64

---

##### `IsForcePlainTextInput`<sup>Optional</sup> <a name="IsForcePlainTextInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainTextInput"></a>

```go
func IsForcePlainTextInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ResponseBodyRegexInput`<sup>Optional</sup> <a name="ResponseBodyRegexInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```go
func ResponseBodyRegexInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `ReturnCodeInput`<sup>Optional</sup> <a name="ReturnCodeInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCodeInput"></a>

```go
func ReturnCodeInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInMillisInput`<sup>Optional</sup> <a name="TimeoutInMillisInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```go
func TimeoutInMillisInput() *f64
```

- *Type:* *f64

---

##### `UrlPathInput`<sup>Optional</sup> <a name="UrlPathInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPathInput"></a>

```go
func UrlPathInput() *string
```

- *Type:* *string

---

##### `IntervalMs`<sup>Required</sup> <a name="IntervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMs"></a>

```go
func IntervalMs() *f64
```

- *Type:* *f64

---

##### `IsForcePlainText`<sup>Required</sup> <a name="IsForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainText"></a>

```go
func IsForcePlainText() interface{}
```

- *Type:* interface{}

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ResponseBodyRegex`<sup>Required</sup> <a name="ResponseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegex"></a>

```go
func ResponseBodyRegex() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `ReturnCode`<sup>Required</sup> <a name="ReturnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCode"></a>

```go
func ReturnCode() *f64
```

- *Type:* *f64

---

##### `TimeoutInMillis`<sup>Required</sup> <a name="TimeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillis"></a>

```go
func TimeoutInMillis() *f64
```

- *Type:* *f64

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPath"></a>

```go
func UrlPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadBalancerBackendsetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---


### LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference <a name="LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.NewLoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetCookieName">ResetCookieName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDisableFallback">ResetDisableFallback</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsHttpOnly">ResetIsHttpOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsSecure">ResetIsSecure</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetMaxAgeInSeconds">ResetMaxAgeInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookieName` <a name="ResetCookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetCookieName"></a>

```go
func ResetCookieName()
```

##### `ResetDisableFallback` <a name="ResetDisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDisableFallback"></a>

```go
func ResetDisableFallback()
```

##### `ResetDomain` <a name="ResetDomain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetIsHttpOnly` <a name="ResetIsHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsHttpOnly"></a>

```go
func ResetIsHttpOnly()
```

##### `ResetIsSecure` <a name="ResetIsSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsSecure"></a>

```go
func ResetIsSecure()
```

##### `ResetMaxAgeInSeconds` <a name="ResetMaxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetMaxAgeInSeconds"></a>

```go
func ResetMaxAgeInSeconds()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallbackInput">DisableFallbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnlyInput">IsHttpOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecureInput">IsSecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName">CookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback">DisableFallback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly">IsHttpOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure">IsSecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieNameInput"></a>

```go
func CookieNameInput() *string
```

- *Type:* *string

---

##### `DisableFallbackInput`<sup>Optional</sup> <a name="DisableFallbackInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallbackInput"></a>

```go
func DisableFallbackInput() interface{}
```

- *Type:* interface{}

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IsHttpOnlyInput`<sup>Optional</sup> <a name="IsHttpOnlyInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnlyInput"></a>

```go
func IsHttpOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IsSecureInput`<sup>Optional</sup> <a name="IsSecureInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecureInput"></a>

```go
func IsSecureInput() interface{}
```

- *Type:* interface{}

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSecondsInput"></a>

```go
func MaxAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```go
func CookieName() *string
```

- *Type:* *string

---

##### `DisableFallback`<sup>Required</sup> <a name="DisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```go
func DisableFallback() interface{}
```

- *Type:* interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `IsHttpOnly`<sup>Required</sup> <a name="IsHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly"></a>

```go
func IsHttpOnly() interface{}
```

- *Type:* interface{}

---

##### `IsSecure`<sup>Required</sup> <a name="IsSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure"></a>

```go
func IsSecure() interface{}
```

- *Type:* interface{}

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds"></a>

```go
func MaxAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---


### LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference <a name="LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.NewLoadBalancerBackendsetSessionPersistenceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resetDisableFallback">ResetDisableFallback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableFallback` <a name="ResetDisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resetDisableFallback"></a>

```go
func ResetDisableFallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallbackInput">DisableFallbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieName">CookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallback">DisableFallback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieNameInput"></a>

```go
func CookieNameInput() *string
```

- *Type:* *string

---

##### `DisableFallbackInput`<sup>Optional</sup> <a name="DisableFallbackInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallbackInput"></a>

```go
func DisableFallbackInput() interface{}
```

- *Type:* interface{}

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```go
func CookieName() *string
```

- *Type:* *string

---

##### `DisableFallback`<sup>Required</sup> <a name="DisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```go
func DisableFallback() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadBalancerBackendsetSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---


### LoadBalancerBackendsetSslConfigurationOutputReference <a name="LoadBalancerBackendsetSslConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.NewLoadBalancerBackendsetSslConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerBackendsetSslConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateIds">ResetCertificateIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCipherSuiteName">ResetCipherSuiteName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetServerOrderPreference">ResetServerOrderPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds">ResetTrustedCertificateAuthorityIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyDepth">ResetVerifyDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyPeerCertificate">ResetVerifyPeerCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateIds` <a name="ResetCertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateIds"></a>

```go
func ResetCertificateIds()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateName"></a>

```go
func ResetCertificateName()
```

##### `ResetCipherSuiteName` <a name="ResetCipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCipherSuiteName"></a>

```go
func ResetCipherSuiteName()
```

##### `ResetProtocols` <a name="ResetProtocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetServerOrderPreference` <a name="ResetServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetServerOrderPreference"></a>

```go
func ResetServerOrderPreference()
```

##### `ResetTrustedCertificateAuthorityIds` <a name="ResetTrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds"></a>

```go
func ResetTrustedCertificateAuthorityIds()
```

##### `ResetVerifyDepth` <a name="ResetVerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyDepth"></a>

```go
func ResetVerifyDepth()
```

##### `ResetVerifyPeerCertificate` <a name="ResetVerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyPeerCertificate"></a>

```go
func ResetVerifyPeerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIdsInput">CertificateIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteNameInput">CipherSuiteNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreferenceInput">ServerOrderPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput">TrustedCertificateAuthorityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepthInput">VerifyDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificateInput">VerifyPeerCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIds">CertificateIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteName">CipherSuiteName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIds">TrustedCertificateAuthorityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepth">VerifyDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificate">VerifyPeerCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateIdsInput`<sup>Optional</sup> <a name="CertificateIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIdsInput"></a>

```go
func CertificateIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `CipherSuiteNameInput`<sup>Optional</sup> <a name="CipherSuiteNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteNameInput"></a>

```go
func CipherSuiteNameInput() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServerOrderPreferenceInput`<sup>Optional</sup> <a name="ServerOrderPreferenceInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreferenceInput"></a>

```go
func ServerOrderPreferenceInput() *string
```

- *Type:* *string

---

##### `TrustedCertificateAuthorityIdsInput`<sup>Optional</sup> <a name="TrustedCertificateAuthorityIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput"></a>

```go
func TrustedCertificateAuthorityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VerifyDepthInput`<sup>Optional</sup> <a name="VerifyDepthInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepthInput"></a>

```go
func VerifyDepthInput() *f64
```

- *Type:* *f64

---

##### `VerifyPeerCertificateInput`<sup>Optional</sup> <a name="VerifyPeerCertificateInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificateInput"></a>

```go
func VerifyPeerCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateIds`<sup>Required</sup> <a name="CertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIds"></a>

```go
func CertificateIds() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `CipherSuiteName`<sup>Required</sup> <a name="CipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteName"></a>

```go
func CipherSuiteName() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `ServerOrderPreference`<sup>Required</sup> <a name="ServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreference"></a>

```go
func ServerOrderPreference() *string
```

- *Type:* *string

---

##### `TrustedCertificateAuthorityIds`<sup>Required</sup> <a name="TrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIds"></a>

```go
func TrustedCertificateAuthorityIds() *[]*string
```

- *Type:* *[]*string

---

##### `VerifyDepth`<sup>Required</sup> <a name="VerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepth"></a>

```go
func VerifyDepth() *f64
```

- *Type:* *f64

---

##### `VerifyPeerCertificate`<sup>Required</sup> <a name="VerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificate"></a>

```go
func VerifyPeerCertificate() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadBalancerBackendsetSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---


### LoadBalancerBackendsetTimeoutsOutputReference <a name="LoadBalancerBackendsetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerbackendset"

loadbalancerbackendset.NewLoadBalancerBackendsetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerBackendsetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



