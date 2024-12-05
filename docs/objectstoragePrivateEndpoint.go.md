# `objectstoragePrivateEndpoint` Submodule <a name="`objectstoragePrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstoragePrivateEndpoint <a name="ObjectstoragePrivateEndpoint" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint oci_objectstorage_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageprivateendpoint"

objectstorageprivateendpoint.NewObjectstoragePrivateEndpoint(scope Construct, id *string, config ObjectstoragePrivateEndpointConfig) ObjectstoragePrivateEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig">ObjectstoragePrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig">ObjectstoragePrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putAccessTargets">PutAccessTargets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetAdditionalPrefixes">ResetAdditionalPrefixes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetFqdns">ResetFqdns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetPrivateEndpointIp">ResetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessTargets` <a name="PutAccessTargets" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putAccessTargets"></a>

```go
func PutAccessTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putAccessTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value ObjectstoragePrivateEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts">ObjectstoragePrivateEndpointTimeouts</a>

---

##### `ResetAdditionalPrefixes` <a name="ResetAdditionalPrefixes" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetAdditionalPrefixes"></a>

```go
func ResetAdditionalPrefixes()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFqdns` <a name="ResetFqdns" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetFqdns"></a>

```go
func ResetFqdns()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetPrivateEndpointIp` <a name="ResetPrivateEndpointIp" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetPrivateEndpointIp"></a>

```go
func ResetPrivateEndpointIp()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstoragePrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageprivateendpoint"

objectstorageprivateendpoint.ObjectstoragePrivateEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageprivateendpoint"

objectstorageprivateendpoint.ObjectstoragePrivateEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageprivateendpoint"

objectstorageprivateendpoint.ObjectstoragePrivateEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageprivateendpoint"

objectstorageprivateendpoint.ObjectstoragePrivateEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ObjectstoragePrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObjectstoragePrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObjectstoragePrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstoragePrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.accessTargets">AccessTargets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList">ObjectstoragePrivateEndpointAccessTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeModified">TimeModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference">ObjectstoragePrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.accessTargetsInput">AccessTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.additionalPrefixesInput">AdditionalPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqdnsInput">FqdnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.privateEndpointIpInput">PrivateEndpointIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.additionalPrefixes">AdditionalPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqdns">Fqdns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessTargets`<sup>Required</sup> <a name="AccessTargets" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.accessTargets"></a>

```go
func AccessTargets() ObjectstoragePrivateEndpointAccessTargetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList">ObjectstoragePrivateEndpointAccessTargetsList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeModified"></a>

```go
func TimeModified() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeouts"></a>

```go
func Timeouts() ObjectstoragePrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference">ObjectstoragePrivateEndpointTimeoutsOutputReference</a>

---

##### `AccessTargetsInput`<sup>Optional</sup> <a name="AccessTargetsInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.accessTargetsInput"></a>

```go
func AccessTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalPrefixesInput`<sup>Optional</sup> <a name="AdditionalPrefixesInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.additionalPrefixesInput"></a>

```go
func AdditionalPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FqdnsInput`<sup>Optional</sup> <a name="FqdnsInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqdnsInput"></a>

```go
func FqdnsInput() interface{}
```

- *Type:* interface{}

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `PrivateEndpointIpInput`<sup>Optional</sup> <a name="PrivateEndpointIpInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.privateEndpointIpInput"></a>

```go
func PrivateEndpointIpInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalPrefixes`<sup>Required</sup> <a name="AdditionalPrefixes" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.additionalPrefixes"></a>

```go
func AdditionalPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Fqdns`<sup>Required</sup> <a name="Fqdns" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqdns"></a>

```go
func Fqdns() interface{}
```

- *Type:* interface{}

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstoragePrivateEndpointAccessTargets <a name="ObjectstoragePrivateEndpointAccessTargets" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageprivateendpoint"

&objectstorageprivateendpoint.ObjectstoragePrivateEndpointAccessTargets {
	Bucket: *string,
	CompartmentId: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#bucket ObjectstoragePrivateEndpoint#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#compartment_id ObjectstoragePrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#namespace ObjectstoragePrivateEndpoint#namespace}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#bucket ObjectstoragePrivateEndpoint#bucket}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#compartment_id ObjectstoragePrivateEndpoint#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#namespace ObjectstoragePrivateEndpoint#namespace}.

---

### ObjectstoragePrivateEndpointConfig <a name="ObjectstoragePrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageprivateendpoint"

&objectstorageprivateendpoint.ObjectstoragePrivateEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessTargets: interface{},
	CompartmentId: *string,
	Name: *string,
	Namespace: *string,
	Prefix: *string,
	SubnetId: *string,
	AdditionalPrefixes: *[]*string,
	DefinedTags: *map[string]*string,
	Fqdns: interface{},
	FreeformTags: *map[string]*string,
	NsgIds: *[]*string,
	PrivateEndpointIp: *string,
	State: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.accessTargets">AccessTargets</a></code> | <code>interface{}</code> | access_targets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#compartment_id ObjectstoragePrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#name ObjectstoragePrivateEndpoint#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#namespace ObjectstoragePrivateEndpoint#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#prefix ObjectstoragePrivateEndpoint#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#subnet_id ObjectstoragePrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.additionalPrefixes">AdditionalPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#additional_prefixes ObjectstoragePrivateEndpoint#additional_prefixes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#defined_tags ObjectstoragePrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.fqdns">Fqdns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#fqdns ObjectstoragePrivateEndpoint#fqdns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#freeform_tags ObjectstoragePrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#nsg_ids ObjectstoragePrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#private_endpoint_ip ObjectstoragePrivateEndpoint#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#state ObjectstoragePrivateEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts">ObjectstoragePrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessTargets`<sup>Required</sup> <a name="AccessTargets" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.accessTargets"></a>

```go
AccessTargets interface{}
```

- *Type:* interface{}

access_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#access_targets ObjectstoragePrivateEndpoint#access_targets}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#compartment_id ObjectstoragePrivateEndpoint#compartment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#name ObjectstoragePrivateEndpoint#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#namespace ObjectstoragePrivateEndpoint#namespace}.

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#prefix ObjectstoragePrivateEndpoint#prefix}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#subnet_id ObjectstoragePrivateEndpoint#subnet_id}.

---

##### `AdditionalPrefixes`<sup>Optional</sup> <a name="AdditionalPrefixes" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.additionalPrefixes"></a>

```go
AdditionalPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#additional_prefixes ObjectstoragePrivateEndpoint#additional_prefixes}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#defined_tags ObjectstoragePrivateEndpoint#defined_tags}.

---

##### `Fqdns`<sup>Optional</sup> <a name="Fqdns" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.fqdns"></a>

```go
Fqdns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#fqdns ObjectstoragePrivateEndpoint#fqdns}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#freeform_tags ObjectstoragePrivateEndpoint#freeform_tags}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#nsg_ids ObjectstoragePrivateEndpoint#nsg_ids}.

---

##### `PrivateEndpointIp`<sup>Optional</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.privateEndpointIp"></a>

```go
PrivateEndpointIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#private_endpoint_ip ObjectstoragePrivateEndpoint#private_endpoint_ip}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#state ObjectstoragePrivateEndpoint#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.timeouts"></a>

```go
Timeouts ObjectstoragePrivateEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts">ObjectstoragePrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#timeouts ObjectstoragePrivateEndpoint#timeouts}

---

### ObjectstoragePrivateEndpointTimeouts <a name="ObjectstoragePrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageprivateendpoint"

&objectstorageprivateendpoint.ObjectstoragePrivateEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#create ObjectstoragePrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#delete ObjectstoragePrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#update ObjectstoragePrivateEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#create ObjectstoragePrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#delete ObjectstoragePrivateEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#update ObjectstoragePrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstoragePrivateEndpointAccessTargetsList <a name="ObjectstoragePrivateEndpointAccessTargetsList" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageprivateendpoint"

objectstorageprivateendpoint.NewObjectstoragePrivateEndpointAccessTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObjectstoragePrivateEndpointAccessTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.get"></a>

```go
func Get(index *f64) ObjectstoragePrivateEndpointAccessTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObjectstoragePrivateEndpointAccessTargetsOutputReference <a name="ObjectstoragePrivateEndpointAccessTargetsOutputReference" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageprivateendpoint"

objectstorageprivateendpoint.NewObjectstoragePrivateEndpointAccessTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObjectstoragePrivateEndpointAccessTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObjectstoragePrivateEndpointTimeoutsOutputReference <a name="ObjectstoragePrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageprivateendpoint"

objectstorageprivateendpoint.NewObjectstoragePrivateEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObjectstoragePrivateEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



