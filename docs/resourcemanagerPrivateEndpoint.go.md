# `resourcemanagerPrivateEndpoint` Submodule <a name="`resourcemanagerPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcemanagerPrivateEndpoint <a name="ResourcemanagerPrivateEndpoint" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint oci_resourcemanager_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourcemanagerprivateendpoint"

resourcemanagerprivateendpoint.NewResourcemanagerPrivateEndpoint(scope Construct, id *string, config ResourcemanagerPrivateEndpointConfig) ResourcemanagerPrivateEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig">ResourcemanagerPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig">ResourcemanagerPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDnsZones">ResetDnsZones</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetIsUsedWithConfigurationSourceProvider">ResetIsUsedWithConfigurationSourceProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetNsgIdList">ResetNsgIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value ResourcemanagerPrivateEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDnsZones` <a name="ResetDnsZones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDnsZones"></a>

```go
func ResetDnsZones()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetIsUsedWithConfigurationSourceProvider` <a name="ResetIsUsedWithConfigurationSourceProvider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetIsUsedWithConfigurationSourceProvider"></a>

```go
func ResetIsUsedWithConfigurationSourceProvider()
```

##### `ResetNsgIdList` <a name="ResetNsgIdList" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetNsgIdList"></a>

```go
func ResetNsgIdList()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourcemanagerPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourcemanagerprivateendpoint"

resourcemanagerprivateendpoint.ResourcemanagerPrivateEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourcemanagerprivateendpoint"

resourcemanagerprivateendpoint.ResourcemanagerPrivateEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourcemanagerprivateendpoint"

resourcemanagerprivateendpoint.ResourcemanagerPrivateEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourcemanagerprivateendpoint"

resourcemanagerprivateendpoint.ResourcemanagerPrivateEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ResourcemanagerPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourcemanagerPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourcemanagerPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ResourcemanagerPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.sourceIps">SourceIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference">ResourcemanagerPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZonesInput">DnsZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProviderInput">IsUsedWithConfigurationSourceProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdListInput">NsgIdListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnIdInput">VcnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZones">DnsZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProvider">IsUsedWithConfigurationSourceProvider</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdList">NsgIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SourceIps`<sup>Required</sup> <a name="SourceIps" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.sourceIps"></a>

```go
func SourceIps() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeouts"></a>

```go
func Timeouts() ResourcemanagerPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference">ResourcemanagerPrivateEndpointTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DnsZonesInput`<sup>Optional</sup> <a name="DnsZonesInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZonesInput"></a>

```go
func DnsZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsUsedWithConfigurationSourceProviderInput`<sup>Optional</sup> <a name="IsUsedWithConfigurationSourceProviderInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProviderInput"></a>

```go
func IsUsedWithConfigurationSourceProviderInput() interface{}
```

- *Type:* interface{}

---

##### `NsgIdListInput`<sup>Optional</sup> <a name="NsgIdListInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdListInput"></a>

```go
func NsgIdListInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnIdInput"></a>

```go
func VcnIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DnsZones`<sup>Required</sup> <a name="DnsZones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZones"></a>

```go
func DnsZones() *[]*string
```

- *Type:* *[]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsUsedWithConfigurationSourceProvider`<sup>Required</sup> <a name="IsUsedWithConfigurationSourceProvider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProvider"></a>

```go
func IsUsedWithConfigurationSourceProvider() interface{}
```

- *Type:* interface{}

---

##### `NsgIdList`<sup>Required</sup> <a name="NsgIdList" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdList"></a>

```go
func NsgIdList() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcemanagerPrivateEndpointConfig <a name="ResourcemanagerPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourcemanagerprivateendpoint"

&resourcemanagerprivateendpoint.ResourcemanagerPrivateEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	SubnetId: *string,
	VcnId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DnsZones: *[]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsUsedWithConfigurationSourceProvider: interface{},
	NsgIdList: *[]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.vcnId">VcnId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dnsZones">DnsZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.isUsedWithConfigurationSourceProvider">IsUsedWithConfigurationSourceProvider</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.nsgIdList">NsgIdList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}.

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.vcnId"></a>

```go
VcnId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}.

---

##### `DnsZones`<sup>Optional</sup> <a name="DnsZones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dnsZones"></a>

```go
DnsZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsUsedWithConfigurationSourceProvider`<sup>Optional</sup> <a name="IsUsedWithConfigurationSourceProvider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.isUsedWithConfigurationSourceProvider"></a>

```go
IsUsedWithConfigurationSourceProvider interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}.

---

##### `NsgIdList`<sup>Optional</sup> <a name="NsgIdList" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.nsgIdList"></a>

```go
NsgIdList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.timeouts"></a>

```go
Timeouts ResourcemanagerPrivateEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#timeouts ResourcemanagerPrivateEndpoint#timeouts}

---

### ResourcemanagerPrivateEndpointTimeouts <a name="ResourcemanagerPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourcemanagerprivateendpoint"

&resourcemanagerprivateendpoint.ResourcemanagerPrivateEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#create ResourcemanagerPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#delete ResourcemanagerPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#update ResourcemanagerPrivateEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#create ResourcemanagerPrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#delete ResourcemanagerPrivateEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#update ResourcemanagerPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcemanagerPrivateEndpointTimeoutsOutputReference <a name="ResourcemanagerPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourcemanagerprivateendpoint"

resourcemanagerprivateendpoint.NewResourcemanagerPrivateEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourcemanagerPrivateEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



