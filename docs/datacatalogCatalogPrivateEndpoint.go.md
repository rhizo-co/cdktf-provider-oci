# `datacatalogCatalogPrivateEndpoint` Submodule <a name="`datacatalogCatalogPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatacatalogCatalogPrivateEndpoint <a name="DatacatalogCatalogPrivateEndpoint" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint oci_datacatalog_catalog_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datacatalogcatalogprivateendpoint"

datacatalogcatalogprivateendpoint.NewDatacatalogCatalogPrivateEndpoint(scope Construct, id *string, config DatacatalogCatalogPrivateEndpointConfig) DatacatalogCatalogPrivateEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig">DatacatalogCatalogPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig">DatacatalogCatalogPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value DatacatalogCatalogPrivateEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts">DatacatalogCatalogPrivateEndpointTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatacatalogCatalogPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datacatalogcatalogprivateendpoint"

datacatalogcatalogprivateendpoint.DatacatalogCatalogPrivateEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datacatalogcatalogprivateendpoint"

datacatalogcatalogprivateendpoint.DatacatalogCatalogPrivateEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datacatalogcatalogprivateendpoint"

datacatalogcatalogprivateendpoint.DatacatalogCatalogPrivateEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datacatalogcatalogprivateendpoint"

datacatalogcatalogprivateendpoint.DatacatalogCatalogPrivateEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatacatalogCatalogPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatacatalogCatalogPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatacatalogCatalogPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatacatalogCatalogPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.attachedCatalogs">AttachedCatalogs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList">DatacatalogCatalogPrivateEndpointLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference">DatacatalogCatalogPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dnsZonesInput">DnsZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dnsZones">DnsZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachedCatalogs`<sup>Required</sup> <a name="AttachedCatalogs" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.attachedCatalogs"></a>

```go
func AttachedCatalogs() *[]*string
```

- *Type:* *[]*string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.locks"></a>

```go
func Locks() DatacatalogCatalogPrivateEndpointLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList">DatacatalogCatalogPrivateEndpointLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeouts"></a>

```go
func Timeouts() DatacatalogCatalogPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference">DatacatalogCatalogPrivateEndpointTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DnsZonesInput`<sup>Optional</sup> <a name="DnsZonesInput" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dnsZonesInput"></a>

```go
func DnsZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DnsZones`<sup>Required</sup> <a name="DnsZones" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dnsZones"></a>

```go
func DnsZones() *[]*string
```

- *Type:* *[]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatacatalogCatalogPrivateEndpointConfig <a name="DatacatalogCatalogPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datacatalogcatalogprivateendpoint"

&datacatalogcatalogprivateendpoint.DatacatalogCatalogPrivateEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DnsZones: *[]*string,
	SubnetId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#compartment_id DatacatalogCatalogPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.dnsZones">DnsZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#dns_zones DatacatalogCatalogPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#subnet_id DatacatalogCatalogPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#defined_tags DatacatalogCatalogPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#display_name DatacatalogCatalogPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#freeform_tags DatacatalogCatalogPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#id DatacatalogCatalogPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts">DatacatalogCatalogPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#compartment_id DatacatalogCatalogPrivateEndpoint#compartment_id}.

---

##### `DnsZones`<sup>Required</sup> <a name="DnsZones" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.dnsZones"></a>

```go
DnsZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#dns_zones DatacatalogCatalogPrivateEndpoint#dns_zones}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#subnet_id DatacatalogCatalogPrivateEndpoint#subnet_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#defined_tags DatacatalogCatalogPrivateEndpoint#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#display_name DatacatalogCatalogPrivateEndpoint#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#freeform_tags DatacatalogCatalogPrivateEndpoint#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#id DatacatalogCatalogPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.timeouts"></a>

```go
Timeouts DatacatalogCatalogPrivateEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts">DatacatalogCatalogPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#timeouts DatacatalogCatalogPrivateEndpoint#timeouts}

---

### DatacatalogCatalogPrivateEndpointLocks <a name="DatacatalogCatalogPrivateEndpointLocks" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datacatalogcatalogprivateendpoint"

&datacatalogcatalogprivateendpoint.DatacatalogCatalogPrivateEndpointLocks {

}
```


### DatacatalogCatalogPrivateEndpointTimeouts <a name="DatacatalogCatalogPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datacatalogcatalogprivateendpoint"

&datacatalogcatalogprivateendpoint.DatacatalogCatalogPrivateEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#create DatacatalogCatalogPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#delete DatacatalogCatalogPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#update DatacatalogCatalogPrivateEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#create DatacatalogCatalogPrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#delete DatacatalogCatalogPrivateEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#update DatacatalogCatalogPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatacatalogCatalogPrivateEndpointLocksList <a name="DatacatalogCatalogPrivateEndpointLocksList" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datacatalogcatalogprivateendpoint"

datacatalogcatalogprivateendpoint.NewDatacatalogCatalogPrivateEndpointLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatacatalogCatalogPrivateEndpointLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.get"></a>

```go
func Get(index *f64) DatacatalogCatalogPrivateEndpointLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatacatalogCatalogPrivateEndpointLocksOutputReference <a name="DatacatalogCatalogPrivateEndpointLocksOutputReference" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datacatalogcatalogprivateendpoint"

datacatalogcatalogprivateendpoint.NewDatacatalogCatalogPrivateEndpointLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatacatalogCatalogPrivateEndpointLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocks">DatacatalogCatalogPrivateEndpointLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() DatacatalogCatalogPrivateEndpointLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocks">DatacatalogCatalogPrivateEndpointLocks</a>

---


### DatacatalogCatalogPrivateEndpointTimeoutsOutputReference <a name="DatacatalogCatalogPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datacatalogcatalogprivateendpoint"

datacatalogcatalogprivateendpoint.NewDatacatalogCatalogPrivateEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatacatalogCatalogPrivateEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



