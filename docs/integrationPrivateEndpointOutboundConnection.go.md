# `integrationPrivateEndpointOutboundConnection` Submodule <a name="`integrationPrivateEndpointOutboundConnection` Submodule" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationPrivateEndpointOutboundConnection <a name="IntegrationPrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection oci_integration_private_endpoint_outbound_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationprivateendpointoutboundconnection"

integrationprivateendpointoutboundconnection.NewIntegrationPrivateEndpointOutboundConnection(scope Construct, id *string, config IntegrationPrivateEndpointOutboundConnectionConfig) IntegrationPrivateEndpointOutboundConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig">IntegrationPrivateEndpointOutboundConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig">IntegrationPrivateEndpointOutboundConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts"></a>

```go
func PutTimeouts(value IntegrationPrivateEndpointOutboundConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationPrivateEndpointOutboundConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationprivateendpointoutboundconnection"

integrationprivateendpointoutboundconnection.IntegrationPrivateEndpointOutboundConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationprivateendpointoutboundconnection"

integrationprivateendpointoutboundconnection.IntegrationPrivateEndpointOutboundConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationprivateendpointoutboundconnection"

integrationprivateendpointoutboundconnection.IntegrationPrivateEndpointOutboundConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationprivateendpointoutboundconnection"

integrationprivateendpointoutboundconnection.IntegrationPrivateEndpointOutboundConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationPrivateEndpointOutboundConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationPrivateEndpointOutboundConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationPrivateEndpointOutboundConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationPrivateEndpointOutboundConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference">IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceIdInput">IntegrationInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceId">IntegrationInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeouts"></a>

```go
func Timeouts() IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference">IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationInstanceIdInput`<sup>Optional</sup> <a name="IntegrationInstanceIdInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceIdInput"></a>

```go
func IntegrationInstanceIdInput() *string
```

- *Type:* *string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationInstanceId`<sup>Required</sup> <a name="IntegrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceId"></a>

```go
func IntegrationInstanceId() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationPrivateEndpointOutboundConnectionConfig <a name="IntegrationPrivateEndpointOutboundConnectionConfig" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationprivateendpointoutboundconnection"

&integrationprivateendpointoutboundconnection.IntegrationPrivateEndpointOutboundConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IntegrationInstanceId: *string,
	SubnetId: *string,
	Id: *string,
	NsgIds: *[]*string,
	State: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.integrationInstanceId">IntegrationInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IntegrationInstanceId`<sup>Required</sup> <a name="IntegrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.integrationInstanceId"></a>

```go
IntegrationInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.timeouts"></a>

```go
Timeouts IntegrationPrivateEndpointOutboundConnectionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#timeouts IntegrationPrivateEndpointOutboundConnection#timeouts}

---

### IntegrationPrivateEndpointOutboundConnectionTimeouts <a name="IntegrationPrivateEndpointOutboundConnectionTimeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationprivateendpointoutboundconnection"

&integrationprivateendpointoutboundconnection.IntegrationPrivateEndpointOutboundConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#create IntegrationPrivateEndpointOutboundConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#delete IntegrationPrivateEndpointOutboundConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#update IntegrationPrivateEndpointOutboundConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#create IntegrationPrivateEndpointOutboundConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#delete IntegrationPrivateEndpointOutboundConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#update IntegrationPrivateEndpointOutboundConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference <a name="IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationprivateendpointoutboundconnection"

integrationprivateendpointoutboundconnection.NewIntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



